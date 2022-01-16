import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
  SORT_SHOWS,
  FETCH_DETAIL_SHOW_REQEST,
  FETCH_DETAIL_SHOW_SUCCESS,
  FETCH_DETAIL_SHOW_ERROR,
  FETCH_ACTORS_REQEST,
  FETCH_ACTORS_SUCCESS,
  FETCH_ACTORS_ERROR,
  SELECT_FAVORITE,
} from "../actionTypes";

export const fetchShowsAction = () => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_SHOWS_REQEST });
    return axios
      .get("https://api.tvmaze.com/shows")
      .then((response) => {
        dispatch({
          type: FETCH_SHOWS_SUCCESS,
          payload: { shows: response.data },
        });
      })
      .catch((error) => {
        dispatch({ type: FETCH_SHOWS_ERROR });
      });
  };
};

export const sortShowsAction = (sortValue: string, shows: any) => {
  const sortedShows = shows
    .sort((a: any, b: any) => {
      if (sortValue === "name") {
        if (a[sortValue] < b[sortValue]) {
          return -1;
        } else if (a[sortValue] > b[sortValue]) {
          return 1;
        } else {
          return 0;
        }
      } else {
        if (a[sortValue].average < b[sortValue].average) {
          return -1;
        } else if (a[sortValue].average > b[sortValue].average) {
          return 1;
        } else {
          return 0;
        }
      }
    })
    .map((show: any) => show);

  return (dispatch: Dispatch) => {
    dispatch({ type: SORT_SHOWS, payload: { shows: sortedShows } });
  };
};

export const fetchDetailShowAction = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_DETAIL_SHOW_REQEST });
    return axios
      .get(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => {
        dispatch({
          type: FETCH_DETAIL_SHOW_SUCCESS,
          payload: { detailShow: response.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_DETAIL_SHOW_ERROR,
        });
      });
  };
};
export const fetchActorsAction = (id: string) => {
  return (dispatch: Dispatch) => {
    dispatch({ type: FETCH_ACTORS_REQEST });
    return axios
      .get(`https://api.tvmaze.com/shows/${id}/cast`)
      .then((response) => {
        dispatch({
          type: FETCH_ACTORS_SUCCESS,
          payload: { actors: response.data },
        });
      })
      .catch((error) => {
        dispatch({
          type: FETCH_ACTORS_ERROR,
        });
      });
  };
};
export const selectFavoriteAction = (props: any, favorites: any) => {
  return (dispatch: Dispatch) => {
    const favoriteExist = favorites.find(
      (favorite: any) => favorite.name === props.name
    );
    if (!favoriteExist) {
      dispatch({
        type: SELECT_FAVORITE,
        payload: { favorites: [...favorites, props] },
      });
    }
  };
};
