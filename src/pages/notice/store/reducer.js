import { Map } from "immutable"
import * as actionTypes from "./constant"
const defaultState = Map({
    hospitalNotice: ''
})


const reducer = (state = defaultState, action) => {
    const { type } = action
    console.log(action)
    switch (type) {
        case actionTypes.HOSPITAL_NOTICE:
            console.log(action.hospitalNotice, 999)
            return state.set("hospitalNotice", action.hospitalNotice)
        default:
            return state
    }
}

export default reducer