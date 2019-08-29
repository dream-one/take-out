//路由器管理

import Vue from "vue";
import Router from "vue-router";
import login from "./pages/login/login.vue";
import Msite from "./pages/Msite/Msite.vue";
import Order from "./pages/Order/Order.vue";
import Profile from "./pages/Profile/Profile.vue";
import Search from "./pages/Search/Search.vue";
import Shop from "./pages/Shop/Shop.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/Msite",
      component: Msite
    },
    {
      path: "/login",
      component: login
    },
    {
      path: "/Order",
      component: Order
    },
    {
      path: "/Profile",
      component: Profile
    },
    {
      path: "/Search",
      component: Search
    },
    {
      path: "/order",
      component: Order
    },
    {
      path: "/profile",
      component: Profile
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/shop",

      component: Shop
    },
    {
      path: "/",

      redirect: "/Msite"
    }
  ],
  linkActiveClass: "mui-active"
});
