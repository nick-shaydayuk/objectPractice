export const isEmpty = (obj) => {
  const objectKeys = Object.keys(obj);
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter(
    (key) => obj[key] || obj[key] === 0 || obj[key] === false,
  ).length;
};
console.log(isEmpty({ a: undefined }));

export const isEmptyDeep = (obj) => {
  if (Object.keys(obj).length === 0) {
    return true;
  }
  for (let key in obj) {
    const value = obj[key];
    if (!value || (typeof value === 'object' && isEmptyDeep(value))) {
      return true;
    }
  }

  return false;
};
export const fill = (number, element) => {};

export const fromPairs = (array) => {};

export const intersection = (...arrays) => {};
