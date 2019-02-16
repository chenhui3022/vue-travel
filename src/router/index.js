import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/components/home/Home'
import City from '@/components/city/City'
import Detail from '@/components/detail/Detail'
import Pics from '@/components/common/Pics'
import Punch from '@/components/recommend/Punch'

Vue.use(Router)

export default new Router({
  routes: [{
    path: '/',
    name: 'Home',
    component: Home
  },{
    path: '/city',
    name: 'City',
    component: City
  },{
    path: '/detail/:id',
    name: 'Detail',
    component: Detail
  },{
    path: '/detail/:id/pics',
    name: 'Pics',
    component: Pics
  },{
    path: '/punch/:id',
    name: 'Punch',
    component: Punch
  }]
})
