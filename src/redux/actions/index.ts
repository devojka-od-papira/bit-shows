import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
} from "./../actionTypes";

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
