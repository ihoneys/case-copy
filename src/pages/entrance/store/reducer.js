import { Map } from "immutable"
import * as actionTypes from "./constant"
const defaultState = Map({
    homeConfig: {}
})


const reducer = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.HOME_CONFIG_INFO:
            return state.set("homeConfig", action.homeConfig)
        default:
            return state
    }
}

export default reducer