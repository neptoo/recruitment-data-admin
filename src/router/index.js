import Vue from 'vue';
import Router from 'vue-router';
import Login from '@/components/Login';
import Home from '@/components/common/Home';
import DashBoard from '@/components/page/DashBoard';
import AmCharts from '@/components/page/BasicCharts';
import JobChart from '@/components/page/JobChart';
import Markdown from '@/components/page/MarkdownPage';
import TodoList from '@/components/page/TodoListPage';
import UploadExcel from '@/components/page/UploadExcel';
import ErrorPage from '@/components/page/ErrorPage';
import Error from '@/components/Error';

import editTable from '@/components/tables/editTable';

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: __dirname,
  routes: [
    {
       path:'*',
       component:Error
    },
    {
      path: '/',
      component: Login
    },

    {
      // path: '/',
      path: '/home',
      component: Home,
      children: [{
        path: '',
        component: DashBoard
      }, {
        path: '/DashBoard',
        component: DashBoard
      }, {
        path: '/Markdown',
        component: Markdown
      }, {
        path: '/BasicCharts',
        component: AmCharts
      }, {
        path: '/JobChart',
        component: JobChart
      }, {
        path: '/TodoList',
        component: TodoList
      }, {
        path: '/ErrorPage',
        component: ErrorPage
      }, {
        path: '/editTable',
        component: editTable
      }, {
        path: '/UploadExcel',
        component: UploadExcel
      }]
    }

  ]
})
