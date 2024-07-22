import { useState, useCallback } from "react";

import { useMutateString } from "./useMutateString";
import { useFindUnique } from "./useFindUnique";

export const useFetchData = () => {
  const { upperFirstChar } = useMutateString();
  const { findUniqueName, findUniqueAddress } = useFindUnique();

  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);

  const getUsers = useCallback(async () => {
    try {
      setIsLoading(true);

      const response = await fetch("https://dummyjson.com/users");

      const data = await response.json();

      setUsers(data.users);

      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);

      setError("Ошибка при получении данных!");

      console.error(err);
    }
  }, []);

  const promiseAllFetch = async (
    values,
    differentiation,
    isAddress = false
  ) => {
    const request = values.map((value) =>
      differentiation.map((dif) =>
        fetch(
          `https://dummyjson.com/users/filter?key=${
            isAddress ? "address." + dif : dif
          }&value=${value}`
        ).then((res) => res.json())
      )
    );

    const response = await Promise.all(request.flat(1));

    return response.map((data) => data.users).flat(1);
  };

  const searchFetch = useCallback(
    async (key, value) => {
      try {
        setIsLoading(true);

        if (key === "default") return getUsers();

        if (!value) throw new Error("Заполните поле!");

        if (key === "full-name" || key === "address")
          value = upperFirstChar(value);

        if (key === "full-name") {
          const names = ["firstName", "lastName"];

          let values = value.split(" ");

          const _data = await promiseAllFetch(values, names);

          values.length >= 2
            ? setUsers(findUniqueName(_data, values[0], values.at(-1)))
            : setUsers(_data);
        }

        if (key === "address") {
          const addresses = ["address", "city"];

          let _temp = value.split(" ");

          let values = [_temp[0], _temp.slice(1, _temp.length).join(" ")];

          const _data = await promiseAllFetch(values, addresses, true);

          values?.[1]
            ? setUsers(findUniqueAddress(_data, values[0], values.at(-1)))
            : setUsers(_data);
        }

        if (key !== "address" && key !== "full-name") {
          const response = await fetch(
            `https://dummyjson.com/users/filter?key=${key}&value=${value}`
          );

          const data = await response.json();

          setUsers(data.users);
        }

        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);

        setError(
          err.message === "Заполните поле!"
            ? "Заполните поле!"
            : "Ошибка при получении данных!"
        );

        console.error(err);
      }
    },
    [findUniqueName, getUsers, upperFirstChar, findUniqueAddress]
  );

  const clearErrors = useCallback(() => setError(null), []);

  return { getUsers, searchFetch, error, users, isLoading, clearErrors };
};
