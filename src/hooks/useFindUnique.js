// Поскольку в теле запроса приходит много файлов, которые не в полной мере
// соответствуют требованиям пользователя - все выходные данные сортируются в данном хуке
export const useFindUnique = () => {
  const getUnique = (currentData) => {
    let keys = new Set();
    let result = [];

    for (let item of currentData) {
      if (!keys.has(item.id)) {
        result.push(item);

        keys.add(item.id);
      }
    }

    return result;
  };
  const findUniqueName = (data, firstName, lastName) => {
    const currentData = data.filter(
      (user) => user.firstName === firstName && user.lastName === lastName
    );

    return getUnique(currentData);
  };

  const findUniqueAddress = (data, city, address) => {
    const currentData = data.filter(
      (user) => user.address.city === city && user.address.address === address
    );

    return getUnique(currentData);
  };

  return { findUniqueName, findUniqueAddress };
};
