import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
  SORT_SHOWS,
  FETCH_DETAIL_SHOW_REQEST,
  FETCH_DETAIL_SHOW_SUCCESS,
  FETCH_DETAIL_SHOW_ERROR,
} from "../actionTypes";

const initialState = {
  shows: [],
  detailShow: null,
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
    case FETCH_DETAIL_SHOW_REQEST:
      return {
        ...state,
      };
    case FETCH_DETAIL_SHOW_SUCCESS:
      return {
        ...state,
        detailShow: action.payload.detailShow,
      };
    default:
      return state;
  }
};
