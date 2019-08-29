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
      />
      <h5 slot="login">登录 | 注册</h5>
    </Head>
    <!-- 轮播图 -->
    <van-swipe indicator-color="white">
      <van-swipe-item>
        <div class="onecontain">
          <ul>
            <li v-for="(item,index) of imges" :key="index">
              <img :src="item.src" />
            </li>
          </ul>
        </div>
      </van-swipe-item>
      <van-swipe-item>2</van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
import Head from "../HeadTop/HeadTop.vue";
export default {
  data() {
    return {
      imges: [
        { src: require("./img/1.jpg") },
        { src: require("./img/2.jpg") },
        { src: require("./img/3.jpg") },
        { src: require("./img/4.jpg") },
        { src: require("./img/5.jpg") },
        { src: require("./img/6.jpg") },
        { src: require("./img/7.jpg") },
        { src: require("./img/8.jpg") }
      ]
    };
  },
  methods: {
    mounted() {
      for (let i = 0; i < 18; i++) {
        console.log(i);
      }
    }
  },
  components: {
    Head
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
  overflow: hidden;
  margin: 0 auto;
  transform: translate(-50%, -50%);
  position: absolute;
  top: 50%;
  left: 50%;
}

.onecontain {
  height: 100%;
  justify-content: space-between;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 10px;
  height: 100%;
  position: relative;
}

li {
  justify-content: center;
  margin: 5px 15px;
  float: left;
}
</style>