export const isEmpty = (obj) => {
  const objectKeys = Object.keys(obj);
  if (objectKeys.length === 0) {
    return true;
  }

  return !objectKeys.filter(
    (key) => obj[key] || obj[key] === 0 || obj[key] === false,
  ).length;
};

export const without = (object, ...args) => {
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};

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

export const intersection = (firstObj, secondObj) => {
  const firstObjKeys = Object.keys(firstObj);
  return firstObjKeys.reduce((acc = {}, key) => {
    if (firstObj[key] === secondObj[key]) {
      acc = {
        ...acc,
        [key]: firstObj[key],
      };
    }
    return acc;
  }, {});
};

export const intersectionDeep = (a, b) => {
  let newObj = {};
  for (const key in a) {
    if (typeof a[key] === 'object') {
      let obj = intersectionDeep(a[key], b[key]);
      newObj[key] = obj;
    } else if (a[key] == b[key]) {
      newObj[key] = a[key];
    }
  }
  return newObj;
};
