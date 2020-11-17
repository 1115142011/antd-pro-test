// https://umijs.org/config/
import { defineConfig } from 'umi';
// import defaultSettings from './defaultSettings';
import proxy from './proxy';
const { REACT_APP_ENV } = process.env;

export default defineConfig({
  history: { type: 'hash' },
  hash: true,
  antd: {},
  dva: {
    hmr: true,
  },
  locale: {
    // default zh-CN
    default: 'zh-CN',
    // default true, when it is true, will use `navigator.language` overwrite default
    antd: true,
    baseNavigator: true,
  },
  dynamicImport: {
    loading: '@/components/PageLoading/index',
  },
  targets: {
    ie: 11,
  },
  // umi routes: https://umijs.org/docs/routing
  routes: [
    {
      path: '/',
      component: '../layouts/BlankLayout',
      routes: [
        {
          path: '/user',
          component: '../layouts/UserLayout',
          routes: [
            {
              path: '/user',
              redirect: '/user/login',
            },

            {
              name: 'register',
              icon: 'smile',
              path: '/user/register',
              component: './user/register',
            },
            {
              name: 'register',
              icon: 'smile',
              path: '/user/login',
              component: './user/login',
            },
            {
              component: '404',
            },
          ],
        },
        {
          path: '/',
          component: '../layouts/BasicLayout',
          // Routes: ['src/pages/Authorized'],
          // authority: ['admin', 'user'],
          // redirect: '/contact-manage',
          routes: [
            {
              path: '/',
              redirect: '/contact-manage/staff-list',
            },
            {
              path: '/contact-manage',
              name: '联络人管理',
              icon: 'dashboard',
              routes: [
                {
                  path: '/',
                  redirect: '/contact-manage/staff-list',
                },
                {
                  name: '联络人',
                  icon: 'smile',
                  path: '/contact-manage/staff-list',
                  component: './contact/staffList/contactList',
                },
                {
                  name: '房源分配',
                  icon: 'smile',
                  path: '/contact-manage/allocation-house',
                  component: './contact/allocationHouse',
                },
              ],
            },
            {
              path: '/house',
              name: '楼盘管理',
              icon: 'InsertRowLeftOutlined',
              routes: [
                {
                  name: '楼盘列表',
                  icon: 'smile',
                  path: '/house/house-list',
                  component: './houses/houseList',
                },
              ],
            },
            {
              path: '/customer',
              name: '用户管理',
              icon: 'UsergroupAddOutlined',
              routes: [
                {
                  name: '用户列表',
                  icon: 'smile',
                  path: '/customer/customer-list',
                  component: './customer/customerList',
                },
                {
                  name: '签约登记',
                  icon: 'smile',
                  path: '/customer/sign-record',
                  component: './customer/registerLease',
                },
              ],
            },
            {
              path: '/record-list',
              name: '租约登记管理',
              icon: 'ProfileOutlined',
              routes: [
                {
                  name: '登记列表',
                  icon: 'smile',
                  path: '/record-list/table',
                  component: './recordLeaseList/table',
                },
              ],
            },
            {
              path: '/fast-house',
              name: '房源管理',
              icon: 'HomeOutlined',
              routes: [
                {
                  name: '闪租房源管理',
                  icon: 'smile',
                  path: '/fast-house/flash',
                  component: './fastHouseing/houseList',
                },
              ],
            },

            {
              component: '404',
            },
          ],
        },
      ],
    },
  ],
  // Theme for antd: https://ant.design/docs/react/customize-theme-cn
  theme: {
    // ...darkTheme,
    // 'primary-color': defaultSettings.primaryColor,
    primaryColor: '#1890ff',
  },
  // @ts-ignore
  title: false,
  ignoreMomentLocale: true,
  proxy: proxy[REACT_APP_ENV || 'dev'],
  manifest: {
    basePath: '/',
  },
  // publicPath: './',
});
