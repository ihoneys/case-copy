import { Map } from "immutable";
import * as actionTypes from "./constants"
const defaultState = Map({
    currentAddress: ""
})
const reduce = (state = defaultState, action) => {
    const { type } = action
    switch (type) {
        case actionTypes.SELECT_ADDRESS:
            return state.set("currentAddress", action.currentAddress);
        default:
            return state;
    }
}

export default reduce