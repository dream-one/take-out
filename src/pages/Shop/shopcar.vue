<template>
  <!-- 底部购物栏 -->
  <div class="contain">
    <div class="black" @click="show = true">
      <div class="left">
        <div :style="{backgroundColor:colorcircle}" class="icon" id="pro">
          <van-icon :color="coloricon" size="44" :info="carinfo" name="cart" />
        </div>
        <div class="text">
          <span class="price">￥{{nowprice}}</span>
          <span class="song">配送费￥{{shopsinfo.deliveryPrice}}</span>
        </div>
      </div>
    </div>
    <div class="green" :style="{backgroundColor:price}">{{picetext}}</div>
    <div>
      <van-popup
        v-model="show"
        closeable
        close-icon="close"
        position="bottom"
        :style="{bottom:'9vh' }"
      >
        <div class="head">
          <span class="chooe">已选商品</span>
          <div class="delall" @click="$store.commit('delall1'),show=false">清空</div>
        </div>
        <ul>
          <li class="list" v-for="(food,index) in this.foodcar" :key="index">
            <span>{{food.name}}</span>
            <div class="right">
              <div class="pric">￥{{food.price}}</div>
              <div class="carcount">
                <CarCount :food="food"></CarCount>
              </div>
            </div>
          </li>
        </ul>
      </van-popup>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import CarCount from './carcontor'
export default {
  data() {
    return {
      show: false
    }
  },

  components: { CarCount },
  computed: {
    ...mapState(['shopsinfo', 'foodcar']),
    price() {
      //结算部分颜色
      let p = 0
      this.foodcar.forEach(element => {
        p = p + element.price * element.count
      })
      if (p < this.shopsinfo.minPrice) {
        return '#373837'
      } else {
        return 'green'
      }
    },
    picetext() {
      //商品显示文本
      let p = 0
      this.foodcar.forEach(element => {
        p = p + element.price * element.count
      })
      if (p === 0) {
        return `￥${this.shopsinfo.minPrice}起送`
      } else if (p < this.shopsinfo.minPrice) {
        return `还要￥${this.shopsinfo.minPrice - p}`
      } else {
        return '去结算'
      }
    },
    nowprice() {
      //已选中商品的价格
      let p = 0
      this.foodcar.forEach(element => {
        p = p + element.price * element.count
      })
      return p
    },
    carinfo() {
      //购物车info
      if (this.$store.getters.foodcount == 0) {
        return ''
      } else {
        return this.$store.getters.foodcount
      }
    },
    colorcircle() {
      //圆显示颜色
      if (this.$store.getters.foodcount == 0) {
        return 'black'
      } else {
        return 'green'
      }
    },
    coloricon() {
      //购物车图标颜色
      if (this.$store.getters.foodcount == 0) {
        return '#373837'
      } else {
        return '#fff'
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.contain {
  display: flex;

  .black {
    background-color: #000;
    width: 70vw;
    color: #fff;

    .left {
      .icon {
        background-color: #2e943e;
        -webkit-border-radius: 5vh;
        width: 43px;
        height: 43px;
        position: absolute;
        margin: 3px 0 auto 15px;
        position: absolute;
      }

      .text {
        display: flex;
        flex-direction: column;
        padding-left: 25vw;
        margin: 1.5vh 0;

        .price {
          font-size: 17px;
          font-weight: bold;
        }

        .song {
          font-size: 8px;
          color: #ccc;
        }
      }
    }
  }

  .green {
    float: right;
    width: 30vw;
    color: #ffffff;
    text-align: center;
    line-height: 9vh;
  }
}

.head {
  display: flex;
  background-color: #efecec;
  justify-content: space-between;
  padding: 10px;
  border-bottom: solid 1px #ccc;

  .chooe {
    font-size: 17px;
  }

  .delall {
    font-size: 15px;
  }
}

.list {
  border-bottom: solid 1px #ccc;
  display: flex;
  justify-content: space-between;
  padding: 10px;
  font-size: 15px;

  .right {
    display: flex;
    justify-content: space-between;
    width: 40vw;

    .pric {
      color: red;
      font-weight: bold;
      text-align: left;
    }
  }
}

.van-overlay {
  top:unset
  bottom: 9vh;
}
</style>