import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vant from 'vant';
import 'vant/lib/index.css';
<<<<<<< HEAD
=======
import './assets/css/iconfont.css'
import { Icon,NavBar  } from 'vant';

Vue.use(Icon,NavBar );
>>>>>>> 顶部

Vue.use(Vant);
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
