import React from "react";

export const useMutateString = () => {
  const validateStr = (str) => {
    str = str.split("");

    let res = [];

    for (let i = 0; i < str.length; i++) {
      if (str[i] !== " ") res.push(str[i]);

      if (str[i] === " " && str?.[i - 1] !== " " && str?.[i + 1])
        res.push(str[i]);
    }

    return res.join("").trim();
  };

  const upperFirstChar = (str) =>
    validateStr(str)
      .split("")
      .map((char, index) =>
        index === 0 || char?.[index - 1] === " " ? char.toUpperCase() : char
      )
      .join("");

  return { upperFirstChar };
};
