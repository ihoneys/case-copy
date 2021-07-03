import { Map } from "immutable"
import * as actionTypes from "./constant"
const defaulteStore = Map({
    isMyself: true
})

function reducer(state = defaulteStore, action) {
    const { type } = action
    switch (type) {
        case actionTypes.IS_MYSELF:
            return state.set("isMyself", action.isMyself);
        default:
            return state
    }
}
export default reducer