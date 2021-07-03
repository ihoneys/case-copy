import { combineReducers } from "redux-immutable";


import { reducer as writeInfoReducer } from "../pages/write-info/store";
import { reducer as addressReducer } from "../pages/address/store"
const cReducer = combineReducers({
    writeInfo: writeInfoReducer,
    address: addressReducer
})

export default cReducer