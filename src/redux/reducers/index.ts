import { combineReducers } from "redux";
import data from "./data";

const rootReducer = combineReducers({ data });
export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
