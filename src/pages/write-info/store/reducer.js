import { Map } from "immutable"
import * as actionTypes from "./constant"
const defaulteStore = Map({
    isPerson: true
})

function reducer(state = defaulteStore, action) {
    const { type } = action
    switch (type) {
        case actionTypes.IS_PERSION:
            return state.set("isPersion", action.isPersion);
        default:
            return state
    }
}
export default reducer