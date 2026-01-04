import { lazy } from 'react'
import { DASHBOARDS_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'

const dashboardsRoute = [
  {
    key: "dashboard.pos",
    path: `${DASHBOARDS_PREFIX_PATH}`,
    component: lazy(() => import("@/features/Dashboard/Pages/DashboardPages")),
    authority: [ADMIN, USER],
    meta: {
      pageContainerType: "contained",
    },
  },
];

export default dashboardsRoute
