<template>
  <div>
    <Head title="深圳龙岗龙城街道">
      <van-icon
        color="#fff"
        size="30"
        class="iconfont"
        class-prefix="icon"
        slot="screen"
        name="sousuo"
        @click="test"
      />
      <h5 slot="login">登录 | 注册</h5>
    </Head>
    <!-- 轮播图 -->
    <van-swipe indicator-color="#02a774">
      <van-swipe-item>
        <div>
          <ul class="onecontain">
            <li v-for="(item,index) of imges" :key="index">
              <img :src="item.src" />
              <span class="food-font">零食甜点</span>
            </li>
          </ul>
        </div>
      </van-swipe-item>
      <van-swipe-item>
        <ul class="onecontain">
          <li v-for="(item,index) of imges1" :key="index">
            <img :src="item.src" />
            <span class="food-font">零食甜点</span>
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
import Head from "../HeadTop/HeadTop.vue";
import Shoplist from '../../components/ShopList/shoplist.vue'

export default {
  data() {
    return {
      imges: [],
      imges1: []
    };
  },
  mounted() {
    for (let i = 0; i < 15; i++) {
      if (i > 7) {
        this.imges1.push({ src: require(`./img/${i}.jpg`) });
      } else {
        this.imges.push({ src: require(`./img/${i + 1}.jpg`) });
      }
      if (i == 14) {
        this.imges1.push({ src: require(`./img/1.jpg`) });
      }
    }
  },methods:{
    test(){
      this.axios.get('/position/40.10038,116.36867').then(res => {
        console.log(res)
      })
    }
  },
  components: {
    Head,
    Shoplist
  }
};
</script>

<style scoped lang="stylus">
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