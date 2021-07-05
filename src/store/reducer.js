import { combineReducers } from "redux-immutable";


import { reducer as writeInfoReducer } from "../pages/write-info/store";
import { reducer as addressReducer } from "../pages/address/store"
import { reducer as homeConfigReducer } from "../pages/entrance/store"
import { reducer as hospitalNoticeReducer } from "../pages/notice/store"
import { reducer as copyLabelDataReducer } from "../pages/copy-label/store"
const cReducer = combineReducers({
    writeInfo: writeInfoReducer,
    address: addressReducer,
    homePage: homeConfigReducer,
    hospitalNoticeConfig: hospitalNoticeReducer,
    copyLabelData: copyLabelDataReducer
})
export default cReducer