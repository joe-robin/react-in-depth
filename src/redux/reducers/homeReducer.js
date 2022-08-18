/**
 * (c) TechFetch. All rights reserved.
 * Created by joe-icanio
 * Created at 11-04-2022
 * Edited by joe-icanio
 * Edit at 03-05-2022
 */

import actions from "../actions/index";
const initialState = {
  movies: {},
  moviesLoading: false,
  categories: [],
};

const homeReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.SET_MOVIES: {
      return {
        ...state,
        movies: action.payload,
      };
    }

    case actions.SET_CATEGORIES: {
      return {
        ...state,
        categories: action.payload,
      };
    }

    case actions.MOVIES_LOADING: {
      return {
        ...state,
        moviesLoading: action.payload,
      };
    }

    default:
      return state;
  }
};
export default homeReducer;
