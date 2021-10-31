import { combineReducers } from "redux";
//import { updateRepoCabinet } from "./repoCabinet";
import { updateApp, AppState } from "./app";

//import { RepoCabinet } from "../models/repoCabinet";

export interface State {
  app: AppState;
  //repoCabinet: RepoCabinet;
}

const reducer = combineReducers({
  app: updateApp,
  //repoCabinet: updateRepoCabinet,
});

export default reducer;
