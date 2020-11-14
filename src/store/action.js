export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_BY_CITY: `GET_OFFERS`,
  SORT_OFFERS_BY_TYPE: `SORT_OFFERS_BY_TYPE`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  sortOffers: (type) => ({
    type: ActionType.SORT_OFFERS_BY_TYPE,
    payload: type,
  }),
};


