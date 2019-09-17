//路由器管理
import Vue from "vue";
Vue.use(Router);
import Router from "vue-router";
import login from "./pages/login/login.vue";
// import msite from "./pages/Msite/Msite.vue";
// import Order from "./pages/Order/Order.vue";
// import Profile from "./pages/Profile/Profile.vue";
// import Search from "./pages/Search/Search.vue";
import Shop from "./pages/Shop/Shop.vue";
import Me from './pages/Profile/mine.vue'
const msite = () =>import('./pages/Msite/Msite.vue')
const Order = () =>import('./pages/Order/Order.vue')
const Profile = () =>import('./pages/Profile/Profile.vue')
const Search = () =>import('./pages/Search/Search.vue')

export default new Router({
  mode:'history',
  routes: [
    {
      path: "/msite", 
      component: msite,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/order",
      component: Order,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/profile",
      component: Profile,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/search",
      component: Search,
      meta: {
        Footshow: true
      }
    },
    {
      path: "/shop",

      component: Shop
    },
    {
      path: "/",
      redirect: "/msite"
    },
    {
      path: "/login",
      component: login
    },
    {
      path:'/me',
      component: Me
    }
  ],
  linkActiveClass: "mui-active"
});
