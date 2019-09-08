import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import VueAMap from "vue-amap";
import axios from "axios";
import "./mock/mockServer";
Vue.prototype.axios = axios;

Vue.use(VueAMap);
VueAMap.initAMapApiLoader({
  key: "ae107fa1adca59b991afff51689232fe",
  plugin: [
    "AMap.Autocomplete",
    "AMap.Geolocation",
    "AMap.PlaceSearch",
    "AMap.Scale",
    "AMap.OverView",
    "AMap.ToolBar",
    "AMap.MapType",
    "AMap.PolyEditor",
    "AMap.CircleEditor"
  ],
  v: "1.4.4"
});

import "./assets/css/iconfont.css";
import { Icon, NavBar, Swipe, SwipeItem } from "vant";

Vue.use(Icon, NavBar);
Vue.use(Swipe).use(SwipeItem);

Vue.use(Vant);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
