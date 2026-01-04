import { DATABASE_PREFIX_PATH } from '@/constants/route.constant'
import {
  NAV_ITEM_TYPE_TITLE,
  NAV_ITEM_TYPE_ITEM,
  NAV_ITEM_TYPE_COLLAPSE,
} from "@/constants/navigation.constant";
import { ADMIN, USER } from '@/constants/roles.constant'

const databaseNavigationConfig = [
  {
    key: "database",
    path: "",
    title: "Database",
    translateKey: "menus.sideMenu.database",
    icon: "database",
    type: NAV_ITEM_TYPE_TITLE,
    authority: [ADMIN, USER],
    meta: {
      horizontalMenu: {
        layout: "columns",
        columns: 4,
      },
    },
    subMenu: [
      {
        key: "database.products",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "Products",
        translateKey: "nav.database.product",
        icon: "products",
        type: NAV_ITEM_TYPE_COLLAPSE,
        authority: [ADMIN, USER],
        subMenu: [
                           {
                               key: 'database.products.productsList',
                               path: `${DATABASE_PREFIX_PATH}/products/product-list`,
                               title: 'product List',
                               translateKey: 'nav.products.productsList',
                               icon: 'productList',
                               type: NAV_ITEM_TYPE_ITEM,
                               authority: [ADMIN, USER],
                               meta: {
                                   description: {
                                       translateKey:
                                           'nav.products.productsListDesc',
                                       label: 'List of all products',
                                   },
                               },
                               subMenu: [],
                           },
                           {
                               key: 'database.products.productsEdit',
                               path: `${DATABASE_PREFIX_PATH}/products/product-edit/1`,
                               title: 'product Edit',
                               translateKey: 'nav.products.productsEdit',
                               icon: 'productEdit',
                               type: NAV_ITEM_TYPE_ITEM,
                               authority: [ADMIN, USER],
                               meta: {
                                   description: {
                                       translateKey:
                                           'nav.products.productsEditDesc',
                                       label: 'Edit product info',
                                   },
                               },
                               subMenu: [],
                           },
                           {
                               key: 'database.products.productsCreate',
                               path: `${DATABASE_PREFIX_PATH}/products/product-create`,
                               title: 'product Create',
                               translateKey: 'nav.products.productsCreate',
                               icon: 'productCreate',
                               type: NAV_ITEM_TYPE_ITEM,
                               authority: [ADMIN, USER],
                               meta: {
                                   description: {
                                       translateKey:
                                           'nav.products.productsCreateDesc',
                                       label: 'Add a new product',
                                   },
                               },
                               subMenu: [],
                           },
                           {
                               key: 'database.products.productsDetails',
                               path: `${DATABASE_PREFIX_PATH}/products/product-details/1`,
                               title: 'product Details',
                               translateKey: 'nav.products.productsDetails',
                               icon: 'productDetails',
                               type: NAV_ITEM_TYPE_ITEM,
                               authority: [ADMIN, USER],
                               meta: {
                                   description: {
                                       translateKey:
                                           'nav.products.productsDetailsDesc',
                                       label: 'Detailed product info',
                                   },
                               },
                               subMenu: [],
                           },
                       ],
      },
      {
        key: "database.stockmanagement",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "Stock Management",
        translateKey: "nav.database.managementstock",
        icon: "servicesDatabase",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "database.category",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "Category",
        translateKey: "nav.database.category",
        icon: "servicesDatabase",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "database.productsuply",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "product & Supply",
        translateKey: "nav.database.productnsuply",
        icon: "servicesDatabase",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "database.taxpay",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "Discount, Tax & Pay",
        translateKey: "nav.database.discounttaxpay",
        icon: "servicesDatabase",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
      {
        key: "database.marketing",
        path: `${DATABASE_PREFIX_PATH}`,
        title: "Marketing",
        translateKey: "nav.database.marketing",
        icon: "servicesDatabase",
        type: NAV_ITEM_TYPE_ITEM,
        authority: [ADMIN, USER],
        subMenu: [],
      },
    ],
  },
];

export default databaseNavigationConfig
