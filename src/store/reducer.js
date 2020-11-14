import {extend} from "../utils";
import {ActionType} from "./action";
import {offers, cities} from "../mocks/offers";

const initialState = {
  citySelected: cities[0],
  offers,
  cities,
  sortType: `Popular`,
  activePlace: ``,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.CHANGE_CITY:
      let newCity = action.payload;
      return extend(state, {
        citySelected: newCity,
      });
    case ActionType.UPDATE_SORT_TYPE:
      let newSortType = action.payload;
      return extend(state, {
        sortType: newSortType,
      });
    case ActionType.UPDATE_ACTIVE_PLACE:
      let newPlace = action.payload;
      return extend(state, {
        activePlace: newPlace,
      });
  }

  return state;
};


export {reducer};
