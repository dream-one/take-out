<template>
  <div class="container">
    <Head title="好吃外卖">
      <van-icon
        color="#fff"
        size="30"
        class="iconfont"
        class-prefix="icon"
        slot="screen"
        name="sousuo"
      />
      <h5 slot="login" @click="$router.push('/login')" v-if="!userInfo.id">登录|注册</h5>
      <van-icon slot="login" size="30" color="#fff" name="share" v-else></van-icon>
    </Head>
    <!-- 轮播图 -->

    <van-swipe indicator-color="#02a774">
      <van-swipe-item>
        <div>
          <ul class="onecontain">
            <li v-for="(item,index) of imges" :key="index">
              <img v-lazy="item.image_url" :src="item.image_url" />
              <span class="food-font">{{item.title}}</span>
            </li>
          </ul>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="onecontain">
          <li v-for="(item,index) of imges1" :key="index">
            <img v-lazy="item.image_url" :src="item.image_url" />
            <span class="food-font">{{item.title}}</span>
          </li>
        </ul>
      </van-swipe-item>
    </van-swipe>

    <div>
      <Shoplist></Shoplist>
    </div>
  </div>
</template>

<script>
import Head from '../HeadTop/HeadTop.vue'
import { mapState } from 'vuex'

import Shoplist from '../../components/ShopList/shoplist.vue'
import { apiAdress, apiGetFood, apiLogin } from '../../request/api'
import { Toast } from 'vant'
import { type } from 'os'
export default {
  data() {
    return {
      imges: [],
      imges1: []
    }
  },
  mounted() {
    this.$nextTick(()=>{this.test()})
  },
  methods: {
    test() {
      apiGetFood()
        .then(res => {
          if (res.code==0) {
            this.imges = res.data.slice(0, res.data.length / 2)
            this.imges1 = res.data.slice(8, res.data.length)
          }else{
            console.log(res)
            console.log('没有获取到数据')
          }
        })
        .catch(err => {
          console.log(err)
          Toast('数据获取失败')
        })
    }
  },
  components: {
    Head,
    Shoplist
  },
  computed: {
    ...mapState(['userInfo'])
  }
}
</script>

<style scoped lang="stylus">
.container {
  overflow: hidden;
}

h5:nth-child(1) {
  font-size: 18px;
  top: 30.0469px;
  position: relative;
  left: 5.1563px;
  color: rgba(248, 248, 248, 0.89);
}

.iconfont.icon.icon-sousuo {
  top: 6px;
  width: 40px;
  height: 53px;
  position: relative;
  left: -8px;
}

p:nth-child(1) {
  font-family: iconfont;
  font-weight: 500;
  font-style: normal;
  font-size: 19px;
  position: relative;
  top: -17px;
  color: #fff;
}

img {
  height: 100%;
  width: 100%;
}

.onecontain {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-content: flex-start;
}

li {
  flex: 1 1 auto;
  margin: 15px;
  width: 15%;
  height: 32%;
  text-align: center;
}

li {
  .food-font {
    font-size: 9px;
    display: inline-block;
    margin: 5 auto;
  }
}
</style>