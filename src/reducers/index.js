import { combineReducers } from "redux";
import homeLoanReducer from "./homeLoanReducer";

export default combineReducers({
    homeLoan: homeLoanReducer
});