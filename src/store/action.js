export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  UPDATE_SORT_TYPE: `UPDATE_SORT_TYPE`,
  UPDATE_ACTIVE_PLACE: `UPDATE_ACTIVE_PLACE`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  updateSortType: (type) => ({
    type: ActionType.UPDATE_SORT_TYPE,
    payload: type,
  }),
  updateActivePlace: (place) => ({
    type: ActionType.UPDATE_ACTIVE_PLACE,
    payload: place,
  }),
};


