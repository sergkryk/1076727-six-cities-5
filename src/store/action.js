import {getOffersByCity} from "../cities";

export const ActionType = {
  CHANGE_CITY: `CHANGE_CITY`,
  GET_OFFERS: `GET_OFFERS`,
};

export const ActionCreator = {
  changeCity: () => ({
    type: ActionType.CHANGE_CITY,
  }),
  getOffersByCity: (city, offers) => ({
    type: ActionType.GET_OFFERS_BY_CITY,
    offers: getOffersByCity(city, offers)
  }),
};


