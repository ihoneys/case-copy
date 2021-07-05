import * as actionTypes from "./constant"

import { getCopyLabelData } from "@/service/api"

const changeLabelDataAction = (res) => ({
    type: actionTypes.LABEL_DATA,
    copyLabel: res
})

// action
export const getCopyLabelDataAction = (unitId) => {
    return async (dispatch) => {
        const res = await getCopyLabelData(unitId)
        dispatch(changeLabelDataAction(res.data))
    }
}