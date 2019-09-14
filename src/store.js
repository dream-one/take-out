import Vue from "vue";
import Vuex from "vuex";
import { stat } from "fs";
import { shopsgoods, shopsinfo } from "./request/api";
import { toUnicode } from "punycode";
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    name: "",
    latitude: 40.10038, //纬度
    longitude: 116.3687, //经度
    address: {}, //地址信息对象
    categorys: [], //分类数组
    shops: [], //商家列表
    userInfo: {},
    shopsinfo: {},
    goods: [], //产品列表
    foodcar: []
  },

  // 别的组件通过this.$store.commit(方法名调用)
  //第二个参数传递一个对象
  mutations: {
    //同步处理state中的数据
    re_address(state) {
      //接受地址信息
    },
    re_categorys(state) {
      //接受分类数组
    },
    re_shops(state, res) {
      //接受商家数组
      state.goods = res.data;
    },
    re_userInfo(state, user) {
      state.userInfo.id = user.id;
      state.userInfo.phone = user.phone;
      state.userInfo.name = user.name;
    },
    dele_userfo(state) {
      state.userInfo = {};
    },
    del_foodcount(state, food) {
      let b = state.foodcar.find(el => el.name == food.name);

      if (b) {
        if (b.count <= 0) {
          return;
        } else {
          b.count--;
        }
      }
      //删除
    },
    add_foodcount(state, food) {
      if (state.foodcar.length == 0) {
        state.foodcar.push(food);
        return;
      }
      //   state.foodcar.forEach((el, index, arr) => {
      //     console.log(el.name == a.name);
      //     if (el.name == a.name) {
      //       arr[index].count++;
      //       return;
      //     }
      //   });
      let b = state.foodcar.find(el => el.name == food.name);
      if (b) {
        b.count++;
      }
      if (!b) {
        food.count++;
        state.foodcar.push(food);
      }
      //增加
    },
    setshopsinfo(state, res) {
      console.log(res);
      state.shopsinfo = res.data;
    }
  },
  getters: {
    userInfoID: state => {
      return state.userInfo.id;
    },
    userInfophone: state => {
      return state.userInfo.phone;
    },
    foodcount: state => {
      let num = 0;
      state.foodcar.forEach(el => {
        num = num + el.count;
      });
      return num;
    }
  },
  actions: {
    //异步处理
    //示例
    // text(具有store实例相同属性的对象){}
    //别的组件通过dispatch(方法名)调用
    shopsGoods(vs) {
      return new Promise((resolve, reject) => {
        shopsgoods()
          .then(res => {
            vs.commit("re_shops", res);
            resolve();
            console.log(res);
          })
          .catch(err => {
            console.log(err + "获取数据失败");
          });
      });
    },
    updata_foodCount({ commit }, { flag, food }) {
      // 如果没有count,给食物列表增加一个count属性
      if (!food.count) {
        Vue.set(food, "count", 0);
      }
      //flag判断加减
      if (flag) {
        commit("add_foodcount", food);
      } else {
        commit("del_foodcount", food);
      }
    },
    shopinfo({ commit }) {
      //shopHead请求数据
      shopsinfo()
        .then(res => {
          commit("setshopsinfo", res);
        })
        .catch(err => {
          console.log(err);
        });
    }
  }
});
