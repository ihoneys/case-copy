import * as actionTypes from "./constant"

import { getHomeUnitConfig } from "@/service/api"

const changeHomeConfigInfoAction = (res) => ({
    type: actionTypes.HOME_CONFIG_INFO,
    homeConfig: res
})

// action
export const getHomeConfigInfoAction = (unitId) => {
    return async (dispatch) => {
        const res = await getHomeUnitConfig(unitId)
        dispatch(changeHomeConfigInfoAction(res.data))
    }
}