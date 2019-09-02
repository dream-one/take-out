<template>
  <div class="star" :class="'star-'+size">
    <span class="star-item" :class="sc" v-for="(sc,index) in starClass" :key="index"></span>
  
  </div>
</template>

<script>
export default {
    props:{
        size:Number,
        ratingcount:Number
    },
    computed:{
        starClass(){
            const BAN = 'half' //三个状态
            const QUAN = 'on'
            const HUI = 'off'
            let sc = [] //要保存的数组
            let bancount = Math.floor(this.ratingcount)//评分取整
            for(let i = 0; i<bancount;i++){
                sc.push(QUAN)  //保存全星
            }
            if(this.ratingcount*10 - bancount*10 >= 5){ //if评分-取整>0.5 即加入一颗半星
                sc.push(BAN)
            }
            while(sc.length < 5){ //如果以上相加个数还小于5，加入灰星
                sc.push(HUI)
            }
            return sc
        }
    }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import '../../../common/stylus/mixins.styl';



.star { // 2x图 3x图
  float: left;
  font-size: 0;

  .star-item {
    display: inline-block;
    background-repeat: no-repeat;
  }

  &.star-48 {
    .star-item {
      width: 20px;
      height: 20px;
      margin-right: 22px;
      background-size: 20px 20px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./img/star48_on');
      }

      &.half {
        bg-image('./img/star48_half');
      }

      &.off {
        bg-image('./img/star48_off');
      }
    }
  }

  &.star-36 {
    .star-item {
      width: 15px;
      height: 15px;
      margin-right: 6px;
      background-size: 15px 15px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./img/star36_on');
      }

      &.half {
        bg-image('./img/star36_half');
      }

      &.off {
        bg-image('./img/star36_off');
      }
    }
  }

  &.star-24 {
    .star-item {
      width: 10px;
      height: 10px;
      position: relative;
      top: 2px;
      margin-right: 3px;
      background-size: 10px 10px;

      &:last-child {
        margin-right: 0;
      }

      &.on {
        bg-image('./img/star24_on');
      }

      &.half {
        bg-image('./img/star24_half');
      }

      &.off {
        bg-image('./img/star24_off');
      }
    }
  }
}
</style>