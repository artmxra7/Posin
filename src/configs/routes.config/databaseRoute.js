import { lazy } from 'react'
import { DATABASE_PREFIX_PATH } from '@/constants/route.constant'
import { ADMIN, USER } from '@/constants/roles.constant'

const databaseRoute = [
  {
    key: "database.product.productList",
    path: `${DATABASE_PREFIX_PATH}/products/product-list`,
    component: lazy(() => import("@/features/products/ProductList")),
    authority: [ADMIN, USER],
  },
];

export default databaseRoute
