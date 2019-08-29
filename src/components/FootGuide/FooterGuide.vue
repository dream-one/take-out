<template>
   <div>
<van-tabbar route active-color="#02a774"  v-model="active">
  <van-tabbar-item to='/msite' icon="shop"  >
    <span >首页</span>
    <template slot="icon"  >
      <van-icon size="20" class="iconfont" class-prefix='icon' name='waimaifuwu-shiyongfangbian' />
    </template>
  </van-tabbar-item>

    <van-tabbar-item to='/search' icon="shop">
    <span>发现</span>
    <template slot="icon" >
      <van-icon size="20" class="iconfont" class-prefix='icon' name='faxian' />
    </template>
  </van-tabbar-item>

    <van-tabbar-item to='/order' icon="shop">
    <span>订单</span>
    <template slot="icon" >
      <van-icon size="20" class="iconfont" class-prefix='icon' name='dingdan' />
    </template>
  </van-tabbar-item>

    <van-tabbar-item to='/profile' icon="shop">
    <span>我的</span>
    <template slot="icon">
      <van-icon size="20" class="iconfont" class-prefix='icon' name='ziyuan' />
    </template>
  </van-tabbar-item>

</van-tabbar>
    </div>

</template>
  <!-- 底部导航栏 -->
   
<script>
export default {
    data() {
        return {
            active: 1,
        }
    }
};
</script>
<style lang="stylus" scoped>
span
  font-size 15px


.van-tabbar-item
  width 40px
  display flex
  justify-content center
  margin 0 30px

</style>>

>>>>>>> 顶部
