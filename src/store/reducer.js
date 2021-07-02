import { combineReducers } from "redux-immutable";


import { reducer as writeInfoReducer } from "../pages/write-info/store";

const cReducer = combineReducers({
    writeInfo: writeInfoReducer
})

export default cReducer