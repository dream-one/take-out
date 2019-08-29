<template>
<!-- 头部导航栏 -->
  <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow>
    <div slot="left">
      <slot name="screen"></slot>
    </div>
    <div slot="right">
      <slot name="login"></slot>
    </div>
  </van-nav-bar>
</template>

<script>
export default {
    data(){
        return {     
        }
    },
    props:{
      title:String
    },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.van-nav-bar
.van-hairline--bottom
  background-color #02a774
  
.van-nav-bar__title.van-ellipsis {//标题样式
 position: relative;
 top: 1px;
 color: rgb(255, 255, 255);
}
</style>