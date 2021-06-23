import React from "react";
import { Redirect } from "react-router-dom";

const IYEnterPage = React.lazy(() => import("@/pages/entrance"))
const IYRecord = React.lazy(() => import("@/pages/record"))
const IYOrderDetail = React.lazy(() => import("@/pages/detail"))
const IYNotice = React.lazy(() => import("@/pages/notice"))
const IYWriteInfo = React.lazy(() => import("@/pages/write-info"))
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
    }
]



export default routes