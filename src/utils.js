export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const sortArray = (array, type) => {
  switch (type) {
    case `POPULAR`:
      return array.sort((a, b) => a.features.length - b.features.length);
    case `FROM_LOW`:
      return array.sort((a, b) => a.price - b.price);
    case `FROM_HIGH`:
      return array.sort((a, b) => b.price - a.price);
    case `FROM_TOP`:
      return array.sort((a, b) => b.rating - a.rating);
    default:
      return array;
  }
};
