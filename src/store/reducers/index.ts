import { combineReducers } from "redux";
import { updateRepoCabinet } from "./repoCabinet";

import { RepoCabinet } from "../models/repoCabinet";

export interface State {
  repoCabinet: RepoCabinet;
}

const reducer = combineReducers({
  repoCabinet: updateRepoCabinet,
});

export default reducer;
