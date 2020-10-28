export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS_BY_CITY: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
};


