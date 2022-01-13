import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
} from "./../actionTypes";

const initialState = {
  shows: [],
};

export default (state = initialState, action: any) => {
  switch (action.type) {
    case FETCH_SHOWS_REQEST:
      return {
        ...state,
      };
    case FETCH_SHOWS_SUCCESS:
      return {
        ...state,
        shows: action.payload.shows,
      };
  }
  return state;
};
