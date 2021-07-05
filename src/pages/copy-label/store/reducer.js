import { Map } from "immutable"
import * as actionTypes from "./constant"
const defaultState = Map({
    copyLabel: {}
})


const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.LABEL_DATA:
            return state.set("copyLabel", action.copyLabel)
        default:
            return state
    }
}

export default reducer