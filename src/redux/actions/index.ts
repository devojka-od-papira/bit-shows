import axios from "axios";
import { Dispatch } from "redux";
import {
  FETCH_SHOWS_REQEST,
  FETCH_SHOWS_SUCCESS,
  FETCH_SHOWS_ERROR,
  SORT_SHOWS,
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
  console.log(shows);
  console.log(sortValue);
  const sortedShows = shows.sort((a: any, b: any) => {
    if (sortValue === "name") {
      console.log("nnnn", a[sortValue]);
      if (a[sortValue] < b[sortValue]) {
        return -1;
      } else if (a[sortValue] > b[sortValue]) {
        return 1;
      } else {
        return 0;
      }
    } else {
      console.log("nnnn", a[sortValue]);
      if (a[sortValue].average < b[sortValue].average) {
        return -1;
      } else if (a[sortValue].average > b[sortValue].average) {
        return 1;
      } else {
        return 0;
      }
    }
  });
  console.log("string poslednji", sortedShows);
  return (dispatch: Dispatch) => {
    dispatch({ type: SORT_SHOWS, payload: { shows: sortedShows } });
  };
};
