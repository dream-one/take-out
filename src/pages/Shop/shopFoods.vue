<template>
  <div class="goods">
    <div class="menu-wrapper" ref="menuWrapper">
      <div class="content">
        <ul ref="menu">
          <li
            class="menu-item"
            @click="is = index,fbs.scrollTo(0,-tops[index],300)"
            :class="{current:is==index}"
            v-for="(item,index) in goods"
            :key="index"
          >
            <span class="text bottom-border-1px">
              <img :class="{icon:item.icon}" :src="item.icon" />
              {{item.name}}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="foods-wrapper">
      <div class="content">
        <ul ref="foodTop">
          <li class="food-list-hook" v-for="(item,index) in goods" :key="index">
            <h1 class="title">{{item.name}}</h1>
            <ul>
              <li
                class="food-item bottom-border-1px"
                v-for="(food,index1) in item.foods"
                :key="index1"
                @click.stop="showfood=food,show=true"
              >
                <div class="icon">
                  <img width="57" height="57" :src="food.icon" />
                </div>
                <div class="content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="desc">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}} 份</span>
                    <span>好评率 {{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                  </div>
                  <div class="cartcontrol-wrapper"><CartControl :food="food"></CartControl></div>
                </div>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
    <van-popup v-model="show"><Food :food="showfood"></Food></van-popup>
     <div class="bottom"><ShopCar></ShopCar></div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import Food from './food'
import CartControl from './carcontor'
import { Toast } from "vant";
import { mapState, mapActions } from "vuex";
import { constants } from "crypto";
import { parse } from "path";
import ShopCar from './shopcar' 
export default {
  data() {
    return {
      activeKey: 0, //选项卡
      is: 0, //当前选中
      scrollY: 0, //保存滚动时的Y坐标
      tops: [], //保存每一项li的top
      leftops: [],
      lefY: 0,
      show:false,
      showfood:{}//点击食物列表，要显示的食物信息
    };
  },
  watch: {
    scrollY() {
      this.is = this.tops.findIndex((item, index, arr) => {
        return this.scrollY >= arr[index] && arr[index + 1] > this.scrollY;
      });
    },
    is() {
      let currentindex = document.getElementsByClassName('menu-item current')[0].offsetTop
    
      if(this.is>7){ this.mbs.scrollTo(0,-(this.is-7)*54,500)}else if(this.is<=0){
        this.mbs.scrollTo(0,-this.is*54,500)
      }
   
    }
  },
  computed: {
    ...mapState(["goods"])

  },
  mounted() {
    let T = this;
    this.getgoods().then(() => {
      //发送ajax完成后的回调
      T.$nextTick(() => {
        //在$newxtTick函数内 保证数据已经渲染完成
        this.initscroll();
        this.inittops();
        this.initleft();
      });
    });
  },
  methods: {
    ...mapActions({
      getgoods: "shopsGoods"
    }),
    initscroll() {
      //初始化滑动
      const mbs = new BScroll(".menu-wrapper", { click: true, probeType: 2 }); //滑动效果
      const fbs = new BScroll(".foods-wrapper", { click: true, probeType: 2 });
      //监听滑动
      fbs.on("scroll", ({ y }) => {
        this.scrollY = Math.abs(y);
      }),
        (this.fbs = fbs);
      //监听滑动结束事件
      fbs.on("scrollEnd", ({ y }) => {
        this.scrollY = Math.abs(y);
      });

      mbs.on("scroll", ({ y }) => {
        this.lefY = Math.abs(y);
      });
      this.mbs = mbs;
    },
    inittops() {
      //收集所有元素的clientHtight
      //初始化tops
      let texttops = [];
      let top = 0;
      texttops.push(top);
      //1.获取节点
      const lis = this.$refs.foodTop.getElementsByClassName("food-list-hook");
      //2.遍历节点
      Array.prototype.slice.apply(lis).forEach(li => {
        top += li.clientHeight;
        texttops.push(top);
      });
      //3.更新数据
      this.tops = texttops;
    },
    initleft() {
      let texttops = [];
      let top = 0;
      texttops.push(top);
      //1.获取节点
      const lis = this.$refs.menu.getElementsByClassName("menu-item");
      //2.遍历节点
      Array.prototype.slice.apply(lis).forEach(li => {
        top += li.clientHeight;
        texttops.push(top);
      });
      //3.更新数据
      this.lefttops = texttops;
    }
  },
  components:{
    CartControl,
    Food,
    ShopCar
  }
};
</script>

<style scoped lang="stylus" rel="stylesheet/stylus" type="text/stylus">
@import '../../common/stylus/mixins.styl';
  .bottom{
    bottom 0
    overflow hidden
    background-color #cccccc
    width 100%
    height 9vh
    position fixed
    z-index 50
  }

.goods {
  display: flex;
  top: 100px;
  bottom: 46px;
  height: 100%;
  width: 100%;
  background: #fff;
  overflow: hidden;

  .menu-wrapper {
    flex: 0 0 80px;
    width: 80px;
    background: #f3f5f7;
    height: 66vh;
    overflow: hidden;

    .menu-item {
      display: table;
      height: 54px;
      width: 56px;
      padding: 0 12px;
      line-height: 14px;
      z-index: 10;

      &.current {
        position: relative;
        margin-top: -1px;
        background: #fff;
        color: $green;
        font-weight: 700;

        .text {
          border-none();
        }
      }

      .icon {
        display: inline-block;
        vertical-align: top;
        width: 12px;
        height: 12px;
        margin-right: 2px;
        background-size: 12px 12px;
        background-repeat: no-repeat;
      }

      .text {
        display: table-cell;
        width: 56px;
        vertical-align: middle;
        bottom-border-1px(rgba(7, 17, 27, 0.1));
        font-size: 12px;
      }
    }
  }

  .foods-wrapper {
    flex: 1;
    height: 58vh;
    
    .title {
      padding-left: 14px;
      height: 26px;
      line-height: 26px;
      border-left: 2px solid #d9dde1;
      font-size: 12px;
      color: rgb(147, 153, 159);
      background: #f3f5f7;
    }

    .food-item {
      display: flex;
      margin: 18px;
      padding-bottom: 18px;
      bottom-border-1px(rgba(7, 17, 27, 0.1));

      &:last-child {
        border-none();
        margin-bottom: 0;
      }

      .icon {
        flex: 0 0 57px;
        margin-right: 10px;
      }

      .content {
        flex: 1;

        .name {
          margin: 2px 0 8px 0;
          height: 14px;
          line-height: 14px;
          font-size: 14px;
          color: rgb(7, 17, 27);
        }

        .desc, .extra {
          line-height: 10px;
          font-size: 10px;
          color: rgb(147, 153, 159);
        }

        .desc {
          line-height: 12px;
          margin-bottom: 8px;
        }

        .extra {
          .count {
            margin-right: 12px;
          }
        }

        .price {
          font-weight: 700;
          line-height: 24px;

          .now {
            margin-right: 8px;
            font-size: 14px;
            color: rgb(240, 20, 20);
          }

          .old {
            text-decoration: line-through;
            font-size: 10px;
            color: rgb(147, 153, 159);
          }
        }

        .cartcontrol-wrapper {
          position: absolute;
          right: 0;
          bottom: 12px;
        }
      }
    }
  }
}
</style>