import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"",
    latitude:40.10038,//纬度
    longitude:116.3687,//经度
    address:{},//地址信息对象
    categorys:[],//分类数组
    shops:[]//商家列表

  },
  mutations: {//同步处理state中的数据
    re_address(){//接受地址信息

    },
    re_categorys(){//接受分类数组

    },
    re_shops(){//接受商家数组

    }
  },
  actions: {

  }
})
