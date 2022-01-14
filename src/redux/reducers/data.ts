import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
  SORT_SHOWS,
} from "../actionTypes";

const initialState = {
  shows: [],
};

// eslint-disable-next-line import/no-anonymous-default-export
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
    case SORT_SHOWS:
      return {
        ...state,
        shows: action.payload.shows,
      };
    default:
      return state;
  }
};
