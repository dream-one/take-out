//路由器管理

import Vue from 'vue'
import Router from 'vue-router'
import login from './pages/login/login.vue'
import Msite from './pages/Msite/Msite.vue'
import Order from './pages/Order/Order.vue'
import Profile from './pages/Profile/Profile.vue'
import Search from './pages/Search/Search.vue'
import Shop from './pages/Shop/Shop.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
<<<<<<< HEAD
      path: '/Msite',
=======
      path: '/msite',
>>>>>>> 顶部
      component: Msite
    },
    {
      path: '/login',
      component: login
    },
    {
<<<<<<< HEAD
      path: '/Order',
      component: Order
    },
    {
      path: '/Profile',
      component: Profile
    },
    {
      path: '/Search',
      component: Search
    },
    {
      path: '/Shop',
=======
      path: '/order',
      component: Order
    },
    {
      path: '/profile',
      component: Profile
    },
    {
      path: '/search',
      component: Search
    },
    {
      path: '/shop',
>>>>>>> 顶部
      component: Shop
    },
    {
      path: '/',
<<<<<<< HEAD
      redirect: '/Msite'
=======
      redirect: '/msite'
>>>>>>> 顶部
    }
  ],
  linkActiveClass:'mui-active'
})
