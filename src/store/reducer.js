import {extend} from "../utils";
import {ActionType} from "./action";
import {offers, cities} from "../mocks/offers";

const initialState = {
  citySelected: cities[0],
  offers,
  cities,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      let newCity = action.payload;
      return extend(state, {
        citySelected: newCity,
      });
  }

  return state;
};


export {reducer};
