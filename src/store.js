import Vue from 'vue'
import Vuex from 'vuex'
import { stat } from 'fs';
Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    name:"",
    latitude:40.10038,//纬度
    longitude:116.3687,//经度
    address:{},//地址信息对象
    categorys:[],//分类数组
    shops:[],//商家列表
    userInfo:{}
  },

  // 别的组件通过this.$store.commit(方法名调用)
  //第二个参数传递一个对象
  mutations: {//同步处理state中的数据
    re_address(state){//接受地址信息

    },
    re_categorys(state){//接受分类数组

    },
    re_shops(state){//接受商家数组

    },
    re_userInfo(state,user){
      state.userInfo.id = user.id
      state.userInfo.phone = user.phone
      state.userInfo.name = user.name
    }
  },
  getters:{
    userInfoID:(state)=>{
      return state.userInfo.id
    },
    userInfophone:(state)=>{
      return state.userInfo.phone
    }
  },
  actions: {//异步处理
    //示例
    // text(具有store实例相同属性的对象){}
    //别的组件通过dispatch(方法名)调用
  }
})
