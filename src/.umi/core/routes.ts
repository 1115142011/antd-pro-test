// @ts-nocheck
import React from 'react';
import { ApplyPluginsType, dynamic } from 'C:/Users/Administrator/Desktop/ppds-member-platform-admin/node_modules/@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';
import LoadingComponent from '@/components/PageLoading/index';

export function getRoutes() {
  const routes = [
  {
    "path": "/",
    "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BlankLayout' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/layouts/BlankLayout'), loading: LoadingComponent}),
    "routes": [
      {
        "path": "/user",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__UserLayout' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/layouts/UserLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/user",
            "redirect": "/user/login",
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/register",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__register' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/user/register'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "name": "register",
            "icon": "smile",
            "path": "/user/login",
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__user__login' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/user/login'), loading: LoadingComponent}),
            "exact": true
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      },
      {
        "path": "/",
        "component": dynamic({ loader: () => import(/* webpackChunkName: 'layouts__BasicLayout' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/layouts/BasicLayout'), loading: LoadingComponent}),
        "routes": [
          {
            "path": "/",
            "redirect": "/contact-manage/staff-list",
            "exact": true
          },
          {
            "path": "/contact-manage",
            "name": "联络人管理",
            "icon": "dashboard",
            "routes": [
              {
                "path": "/",
                "redirect": "/contact-manage/staff-list",
                "exact": true
              },
              {
                "name": "联络人",
                "icon": "smile",
                "path": "/contact-manage/staff-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__contact__staffList__contactList' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/contact/staffList/contactList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "房源分配",
                "icon": "smile",
                "path": "/contact-manage/allocation-house",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__contact__allocationHouse' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/contact/allocationHouse'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/house",
            "name": "楼盘管理",
            "icon": "InsertRowLeftOutlined",
            "routes": [
              {
                "name": "楼盘列表",
                "icon": "smile",
                "path": "/house/house-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__houses__houseList' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/houses/houseList'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/customer",
            "name": "用户管理",
            "icon": "UsergroupAddOutlined",
            "routes": [
              {
                "name": "用户列表",
                "icon": "smile",
                "path": "/customer/customer-list",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__customer__customerList' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/customer/customerList'), loading: LoadingComponent}),
                "exact": true
              },
              {
                "name": "签约登记",
                "icon": "smile",
                "path": "/customer/sign-record",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__customer__registerLease' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/customer/registerLease'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/record-list",
            "name": "租约登记管理",
            "icon": "ProfileOutlined",
            "routes": [
              {
                "name": "登记列表",
                "icon": "smile",
                "path": "/record-list/table",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__recordLeaseList__table' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/recordLeaseList/table'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "path": "/fast-house",
            "name": "房源管理",
            "icon": "HomeOutlined",
            "routes": [
              {
                "name": "闪租房源管理",
                "icon": "smile",
                "path": "/fast-house/flash",
                "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__fastHouseing__houseList' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/fastHouseing/houseList'), loading: LoadingComponent}),
                "exact": true
              }
            ]
          },
          {
            "component": dynamic({ loader: () => import(/* webpackChunkName: 'p__404' */'C:/Users/Administrator/Desktop/ppds-member-platform-admin/src/pages/404'), loading: LoadingComponent}),
            "exact": true
          }
        ]
      }
    ]
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
