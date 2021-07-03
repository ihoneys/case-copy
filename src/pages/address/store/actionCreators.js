
import * as actionTypes from "./constants"

const changeAddressAction = (res) => ({
    type: actionTypes.SELECT_ADDRESS,
    currentAddress: res
})

export const selectAddressAction = (value) => {
    return dispatch => {
        dispatch(changeAddressAction(value))
    }
}
