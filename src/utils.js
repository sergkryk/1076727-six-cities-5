export const extend = (a, b) => {
  return Object.assign({}, a, b);
};

export const getOffersByCity = (array, city) => {
  return array.filter((item) => item.city === city);
};

export const sortArray = (array, type) => {
  switch (type) {
    case `Popular`:
      return array.sort((a, b) => a.features.length - b.features.length);
    case `Price: low to high`:
      return array.sort((a, b) => a.price - b.price);
    case `Price: high to low`:
      return array.sort((a, b) => b.price - a.price);
    case `Top rated first`:
      return array.sort((a, b) => b.rating - a.rating);
    default:
      return array;
  }
};
