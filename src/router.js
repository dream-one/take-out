//路由器管理

import Vue from "vue";
import Router from "vue-router";
import login from "./pages/login/login.vue";
import msite from "./pages/Msite/Msite.vue";
import Order from "./pages/Order/Order.vue";
import Profile from "./pages/Profile/Profile.vue";
import Search from "./pages/Search/Search.vue";
import Shop from "./pages/Shop/Shop.vue";

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/msite",
      component: msite,
      meta:{
        Footshow:true
      }
    },
    {
      path: "/order",
      component: Order,
      meta:{
        Footshow:true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta:{
        Footshow:true
      }
    },
    {
      path: "/search",
      component: Search,
      meta:{
        Footshow:true
      }
    },
    {
      path: "/shop",

      component: Shop
    },
    {
      path: "/",
      redirect: "/Msite"
    },
    {
      path:"/login",
      component:login
    }
  ],
  linkActiveClass: "mui-active"
});
