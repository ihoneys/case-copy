import React from "react";
import { Redirect } from "react-router-dom";

const IYEnterPage = React.lazy(() => import("@/pages/entrance"))
const IYRecord = React.lazy(() => import("@/pages/record"))
const IYOrderDetail = React.lazy(() => import("@/pages/detail"))
const IYNotice = React.lazy(() => import("@/pages/notice"))
const IYWriteInfo = React.lazy(() => import("@/pages/write-info"))
const IYCopyLabel = React.lazy(() => import("@/pages/copy-label"))
const IYMailingWay = React.lazy(() => import("@/pages/mailing-way"))
const IYAddNewAddress = React.lazy(() => import("@/pages/add-address"))
const IYAddressList = React.lazy(() => import("@/pages/address"))
const IYSignature = React.lazy(() => import("@/pages/signature"))
const IYPayOrder = React.lazy(() => import("@/pages/pay-order"))
const routes = [
    {
        path: "/",
        exact: true,
        render: () => <Redirect to="/entrance" />
    },
    {
        path: "/entrance",
        exact: true,
        component: IYEnterPage
    },
    {
        path: "/record",
        component: IYRecord
    },
    {
        path: "/detail",
        component: IYOrderDetail
    },
    {
        path: "/notice",
        component: IYNotice
    },
    {
        path: "/write",
        component: IYWriteInfo
    },
    {
        path: "/copy",
        component: IYCopyLabel
    },
    {
        path: "/mailing",
        component: IYMailingWay
    },
    {
        path: "/addAddress",
        component: IYAddNewAddress
    },
    {
        path: "/address",
        component: IYAddressList
    },
    {
        path: "/signature",
        component: IYSignature
    },
    {
        path: "/pay",
        component: IYPayOrder
    }
]



export default routes