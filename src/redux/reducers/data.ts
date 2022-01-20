import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  SORT_SHOWS,
  FETCH_DETAIL_SHOW_REQEST,
  FETCH_DETAIL_SHOW_SUCCESS,
  FETCH_ACTORS_REQEST,
  FETCH_ACTORS_SUCCESS,
  SELECT_FAVORITE,
} from "../actionTypes";

const initialState = {
  shows: [],
  detailShow: null,
  actors: [],
  favorites: [],
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
    case FETCH_ACTORS_REQEST:
      return {
        ...state,
      };
    case FETCH_ACTORS_SUCCESS:
      return {
        ...state,
        actors: action.payload.actors,
      };
    case SELECT_FAVORITE:
      return {
        ...state,
        favorites: action.payload.favorites,
      };
    default:
      return state;
  }
};
