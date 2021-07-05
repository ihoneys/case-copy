import * as actionTypes from "./constant"

import { getHospitalConfigNotice } from "@/service/api"

const changeHospitalNoticeAction = (res) => ({
    type: actionTypes.HOSPITAL_NOTICE,
    hospitalNotice: res
})

// action
export const getHospitalNoticeAction = (unitId) => {
    return async (dispatch) => {
        const res = await getHospitalConfigNotice(unitId)
        dispatch(changeHospitalNoticeAction(res.data))
    }
}