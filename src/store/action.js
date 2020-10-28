import {getOffersByCity} from "../cities";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: (city) => ({
    type: ActionType.CHANGE_CITY,
    payload: city,
  }),
  getOffersByCity: (city, offers) => ({
    type: ActionType.GET_OFFERS_BY_CITY,
    offers: getOffersByCity(city, offers)
  }),
};


