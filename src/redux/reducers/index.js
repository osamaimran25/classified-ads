import { combineReducers } from "redux";
import adsReducer from "./ads";

const rootReducer = combineReducers({
  ads: adsReducer,
});

export default rootReducer;
