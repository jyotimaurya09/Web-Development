import changeTheNumber from "./incDec";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
    changeTheNumber: changeTheNumber
})

export default rootReducer;