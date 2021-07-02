import * as actionTypes from "./constant"


const changeIsPersionAction = (res) => ({
    type: actionTypes.IS_PERSION,
    isPersion: res
})

export const getIsPersionAction = (isPersion) => {
    return dispatch => {
        dispatch(changeIsPersionAction(isPersion))
    }
}