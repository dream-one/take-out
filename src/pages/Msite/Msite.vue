<template>
  <div>
    <Head>
       <van-icon color="#fff" size="30" class="iconfont" class-prefix='icon' slot="screen" name='sousuo' />
       <p slot="font">哈哈哈</p>
       <h5 slot="login">登录 | 注册</h5>
    </Head>
  </div>
</template>

<script>
import Head from "../HeadTop/HeadTop";
export default {
  data() {
    return {};
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
 color #fff
}
</style>