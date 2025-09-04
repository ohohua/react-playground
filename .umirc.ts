import { defineConfig } from '@umijs/max';
import { layout } from './src/app';

export default defineConfig({
  antd: {},
  access: {},
  model: {},
  initialState: {},
  request: {},
  chainWebpack(config) {
    config.module
      .rule('raw-loader')
      .test(/\.(txt|md|xml|svg|html)$/i)
      .use('raw-loader')
      .loader('raw-loader')
      .end();
  },
  layout: layout(),
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      component: './Home',
    },
  ],

  npmClient: 'pnpm',
  tailwindcss: {},
});
