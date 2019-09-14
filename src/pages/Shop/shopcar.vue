<template>
  <!-- 底部购物栏 -->
  <div class="contain">
    <div class="black">
      <div class="left">
        <div>
          <van-popup
            v-model="show"
            closeable
            close-icon="close"
            :overlay="false"
            position="bottom"
            :style="{ height: '20%',bottom:'9vh' }"
          ></van-popup>
        </div>
        <div class="icon" id="pro" @click="show = true">
          <van-icon size="44" :info="$store.getters.foodcount" name="cart" />
        </div>
        <div class="text">
          <span class="price">￥{{nowprice}}</span>
          <span class="song">配送费￥{{shopsinfo.deliveryPrice}}</span>
        </div>
      </div>
    </div>
    <div class="green" :style="{backgroundColor:price}">{{picetext}}</div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      show: false
    }
  },
  computed: {
    ...mapState(['shopsinfo', 'foodcar']),
    price() {
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
      let p = 0
      this.foodcar.forEach(element => {
        p = p + element.price * element.count
      })
      if (p < this.shopsinfo.minPrice) {
        return `￥${this.shopsinfo.minPrice}起送`
      } else {
        return '去结算'
      }
    },
    nowprice() {
      let p = 0
      this.foodcar.forEach(element => {
        p = p + element.price * element.count
      })
      return p
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

.black {
}
</style>