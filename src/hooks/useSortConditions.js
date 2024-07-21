export const useSortConditions = () => {
  const sortConditions = (left, right, typeOfSort, cellOfSort) => {
    if (typeOfSort === "increase") {
      if (cellOfSort === "full-name")
        return left.firstName.localeCompare(right.firstName);

      if (cellOfSort === "age") return left.age - right.age;

      if (cellOfSort === "address")
        return left.address.city.localeCompare(right.address.city);

      if (cellOfSort === "gender")
        return left.gender.localeCompare(right.gender);
    }

    if (typeOfSort === "decreasing") {
      if (cellOfSort === "full-name")
        return right.firstName.localeCompare(left.firstName);

      if (cellOfSort === "age") return right.age - left.age;

      if (cellOfSort === "address")
        return right.address.city.localeCompare(left.address.city);

      if (cellOfSort === "gender")
        return right.gender.localeCompare(left.gender);
    }
  };

  return { sortConditions };
};
