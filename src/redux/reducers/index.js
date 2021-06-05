import { combineReducers } from "redux";
import adsReducer from "./ads.reducer";
import user from "./user.reducer";
const rootReducer = combineReducers({
  ads: adsReducer,
  userReducer: user,
});

export default rootReducer;
