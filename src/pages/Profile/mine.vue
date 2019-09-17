<template>
  <div class="contain">
    <HeadTop title="欢迎联系">
      <van-icon @click="$router.go(-1)" name="arrow-left" size="25" slot="screen" color="#fff" />
    </HeadTop>
    <div class="imgTop" @click="upda()">
      <img class="small" src="./img/wei1xin.jpg" />
      <van-popup :close-on-click-overlay="false" v-model="show">
        <img class="larget" src="./img/wei1xin.jpg" />
      </van-popup>
      <span class="click">点击查看大图</span>
    </div>

    <div class="con">
      <van-cell-group>
        <van-cell title="邮箱" value="zjcoder1999@gmail.com" />
        <van-cell title="电话号码" value="15112695092" />
        <van-cell title="项目地址" is-link value="前往" url="https://github.com/dream-one/take-out" />
        <van-cell title="github个人主页" is-link value="前往" url="https://github.com/dream-one" />
      </van-cell-group>
    </div>
  </div>
</template>

<script>
import HeadTop from '../HeadTop/HeadTop'
export default {
  data() {
    return {
      show: false
    }
  },
  components: {
    HeadTop
  },
  methods: {
    upda() {
      this.show = !this.show
    }
  }
}
</script>

<style lang="stylus" scoped>
.contain {
  background-color: #ecebeb;
  width: 100vw;
  height: 100vh;

  .imgTop {
    height: 110px;
    width: 110px;
    background-color: #dcd8d8;
    border-radius: 50%;
    margin: 80px auto;

    .click {
      margin: 19px;
      font-size: 10px;
      color: #ccc;
    }

    .small {
      width: 100px;
      height: 100px;
      border-radius: 50%;
      text-align: center;
      margin: 5px;
    }

    .larget {
      width: 300px;
      height: 300px;
    }
  }
}
</style>