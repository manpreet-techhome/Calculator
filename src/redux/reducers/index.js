import { combineReducers } from "redux";
import calculateReducer from "./calculateReducer";


const reducers = combineReducers({
  Calculator: calculateReducer,
});
export default reducers;
