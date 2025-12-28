import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'

const dashboardsRoute = [
  {
    key: "dashboard.pos",
    path: `${DASHBOARDS_PREFIX_PATH}/pos`,
    component: lazy(() => import("@/views/dashboards/PosDashboard")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "contained",
    },
  }
];

export default dashboardsRoute
