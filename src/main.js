import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import Vant from "vant";
import "vant/lib/index.css";
import axios from "axios";
import { Lazyload } from "vant";
Vue.use(Lazyload, {
  loading:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAeFBMVEX////Ozs76+voAAADY2NjQ0NDn5+eqqqrLy8vy8vLr6+v5+fmcnJzu7u7d3d319fVra2sxMTGGhobh4eFlZWW1tbWmpqbCwsKVlZWgoKB4eHhgYGA4ODhBQUEzMzNWVlYdHR1vb29OTk6MjIwnJye7u7sWFhYSEhLdnjiSAAADd0lEQVR4nO3aa3ObOBiGYayVZAHhYONznGRTx+3//4eVxDG7MNNO3WVF7+uTHWYyeuYVr4RwFAEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABYgiIp5h7C75XsD/tk7kH8TuL49PR0FHMP4+FEmraf1jbhuk2YZQuZsULneRPlU0J9Pt+XETFRSsk61TBhcSrft2bOgT2MXlnafxwm3Jdl+X6fc2APEyubUPr5OEhYbctdeVHzDu1RpE1ocvepTyjWO1vD80Laqi+iyqJhQnVxJcznHtqjaF9EMUgYn10J13MP7GGEm6erZJDQlK6Eoa8VIo67td24ZiO6hPHNlvD52FzVR5PNNchfIbSUsh25bzY6Sg+n0+kgovtutyu3Tf77+5fnc4gRC5dK5XH9xRXRFFFVFVUVJTtXwrrNqMvL5np9DrHn+IQ2Y+VLlRsj4+6a3D7vDu7v+vay2Wxer29yrmH+ikT5iEYlNksq9fCaON5s44n314+N87JOp/7L/5lIZJNRjjTNQsSmrPO97vahdtVCS1NPVT1y9enV5/t4O1f/+cgep6iU7zFjz/V3n+96Cn1vGuc24XinvNhJ+n4MdYL2RKLM+Aa7+vplH+I6+G/p1NnTetGHUp7ozT2Un5Zmujc1/Oyybd0Oga35aa5MR00t5/qvgbew1gxdb9lqkwmTvwcJv4b1tJipn074EdiplJb9NF39yCz9dgttayp+pE/GA+F10z+IyKYWAjm5joRE2I3pxDFMZlYyCz5j7B8u5FgOfwKnqnjkUjjS5gHRjK3mVX1J6tCa6EDWrPvDI5pe3Dwer4K9He3Orc63SoR9hvqcwn23LajNGORDYtqdYLhsiZHp54vuyUno9iQnxJlanyaq+vWv6yru9VOzAci77lPUhQ6yiD5he+it/bG+7S55nlfdEbjnblaVh1jDKKvy9ohN+HLadmNnrpHN+7ZVe2fqSoe5ZPQ/wfCz0q8Ysi6lXylMiCf5E+K2hF3CuojLOIZy+tuuTdjdmMvgX2DU60GXMPVbtoWctYlBmC5hEzvQzcw/+CxNV+kTRvlyiuj2LapZDgYJXbMZfWMTnliqLskgoU2uRnfkAYqTbts9TCiSZCEBh+zSv6SFfoRWZiH33qSkWkb7BAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAPAd3Ychh93QG68AAAAASUVORK5CYII="
});
import "./filters/filter";
import "./mock/mockServer";
import Viewer from "v-viewer";
import "viewerjs/dist/viewer.css";
Vue.use(Viewer);
Viewer.setDefaults({
  Options: {
    inline: true,
    button: true,
    navbar: true,
    title: true,
    toolbar: true,
    tooltip: true,
    movable: true,
    zoomable: true,
    rotatable: true,
    scalable: true,
    transition: true,
    fullscreen: true,
    keyboard: true,
    url: "data-source"
  }
});
axios.defaults.baseURL = 'https://elm.cangdu.org'
Vue.prototype.axios = axios;

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
