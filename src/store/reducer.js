import {extend} from "../utils";
import {ActionType} from "./action";
import {offers, cities} from "../mocks/offers";

const initialState = {
  citySelected: `Amsterdam`,
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

    // case ActionType.INCREMENT_MISTAKES:
    //   const mistakes = state.mistakes + action.payload;

    //   if (mistakes >= MAX_MISTAKE_COUNT) {
    //     return extend({}, initialState);
    //   }

    //   return extend(state, {
    //     mistakes: state.mistakes + action.payload,
    //   });
  }

  return state;
};


export {reducer};
