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
  if (!object || !args) return;
  const newObject = { ...object };

  args.forEach((arg) => {
    delete newObject[arg];
  });

  return newObject;
};

export const isEmptyDeep = (obj) => {
  if (obj === '' || obj === null || obj !== obj || typeof obj === 'undefined') {
    return true;
  }
  
  if (typeof obj === 'object') {
    for (const key of Object.keys(obj)) {
      if (!isEmptyDeep(obj[key])) {
        return false;
      }
    }
    return true;
  }
  
  return false;
}

export const intersection = (firstObj, secondObj) => {
  if (!firstObj || !secondObj) return;
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

export const intersectionDeep = (firstObj, secondObj) => {
  if (!firstObj || !secondObj) return;
  let newObj = {};
  for (const key in firstObj) {
    if (typeof firstObj[key] === 'object') {
      let obj = intersectionDeep(firstObj[key], secondObj[key]);
      newObj[key] = obj;
    } else if (firstObj[key] == secondObj[key]) {
      newObj[key] = firstObj[key];
    }
  }
  return newObj;
};
