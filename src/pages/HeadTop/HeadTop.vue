<template>
  <van-nav-bar :title="title" left-text="返回" right-text="按钮" left-arrow>
    <div slot="left">
      <slot name="screen">111</slot>
    </div>
  </van-nav-bar>
</template>

<script>
export default {
    data(){
        return {
            title:""
        }
    },
  methods: {}
};
</script>

<style lang="stylus" scoped>
.van-nav-bar
.van-hairline--bottom
  background-color #02a774
  .iconfont.icon.icon-sousuo {
 top: 6px;
 width: 40px;
 height: 53px;
 position: relative;
 left: -8px;
}
</style>