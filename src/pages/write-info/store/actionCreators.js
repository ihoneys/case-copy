import * as actionTypes from "./constant"


const changeIsPersionAction = (res) => ({
    type: actionTypes.IS_MYSELF,
    isMyself: res
})

export const getIsPersionAction = (isMyself) => {
    return dispatch => {
        dispatch(changeIsPersionAction(isMyself))
    }
}