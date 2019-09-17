<template>
  <section class="search">
    <header class="header">
      <a class="header_title">
        <span class="header_title_text ellipsis">搜索</span>
      </a>
    </header>
    <form class="search_form" @submit.prevent="search">
      <input type="search" placeholder=" 请输入商家名称" class="search_input" v-model="keyword">
      <input type="submit" class="search_submit">
    </form>
    <section class="list">
      <div v-if="flag">很遗憾，暂无搜索结果</div>
    </section>
  </section>
</template>

<script>
  import HeaderTop from '../HeadTop/HeadTop'
  import {mapState} from 'vuex'
  import axios from 'axios'
  export default {
    data(){
      return {
        title:'搜索',
        h:Number,
        keyword:'',
        space:false,
        flag:false
      }
    },
    components:{
      HeaderTop
    },
    methods:{
      search(){
        this.flag = true
      }
    },
    mounted:function () {
      this.flag=false
    },
    watch:{
      keyword:function(){
      if(this.keyword.length==0){
       this.flag = false
      }
    }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
  @import "../../common/stylus/mixins.styl"
  .search
    width 100%
    height 100%
    overflow hidden
    .header // 头部公共 css
      background-color #02a774
      position fixed
      z-index 100
      left 0
      top 0
      width 100%
      height 45px
      .header_search
        position absolute
        left 15px
        top 50%
        transform translateY(-50%)
        width 10%
        height 50%
          .iconfont
            font-size 22px
            color #fff
      .header_title
        position absolute
        top 50%
        left 50%
        transform translate(-50%, -50%)
        width 30%
        color #fff
        font-size 22px
        text-align center
    .search_form
      clearFix()
      margin-top 45px
      background-color #fff
      padding 12px 8px
      input
        height 35px
        padding 0 4px
        border-radius 2px
        font-weight bold
        outline none
        &.search_input
          float left
          width 79%
          border 4px solid #f2f2f2
          font-size 14px
          color #333
          background-color #f2f2f2
        &.search_submit
          float right
          width 18%
          border 4px solid #02a774
          font-size 16px
          color #fff
          background-color #02a774
    .list
      .list_container
        background-color: #fff;
        .list_li
          display: flex;
          justify-content: center;
          padding: 10px
          border-bottom: 1px solid $bc;
          .item_left
            margin-right: 10px
            .restaurant_img
              width 50px
              height 50px
              display block
          .item_right
            font-size 12px
            flex 1
            .item_right_text
              p
                line-height 12px
                margin-bottom 6px
                &:last-child
                  margin-bottom 0
    .search_none
      margin: 0 auto
      color: #333
      background-color: #fff
      text-align: center
      margin-top: 0.125rem
</style>