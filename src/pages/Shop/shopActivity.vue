<template>
  <div class="shop-info">
    <div class="info-content">
      <section class="section">
        <h2 class="title">配送信息</h2>
        <div class="delivery">
          <div class="body">
            <span class="delivery-icon">好吃专送</span>
            <span>由商家配送提供配送，约{{shopsinfo.deliveryTime}}分钟送达，距离{{shopsinfo.distance}}m</span>
          </div>
          <div class="delivery-money">配送费￥{{shopsinfo.deliveryPrice}}</div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家服务</h3>
        <div class="activity">
          <div class="shang">
            <van-tag plain class="biaoji">赔</van-tag>商家原因导致订单取消，佩服代金卷
          </div>
          <div class="xia">
            <van-tag plain class="biaoji">票</van-tag>该商家支持开发票，请在下单时填写好发票抬头
          </div>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家实景</h3>
        <div class="pic-wrapper">
          <ul class="pic-list" ref="ul">
            <viewer class="pic-contain" :images="shopsinfo.pics">
              <li class="pic-item" v-for="(item,index) in shopsinfo.pics" :key="index">
                <img width="120" height="90" :src="item" />
              </li>
            </viewer>
          </ul>
        </div>
      </section>
      <div class="split"></div>
      <section class="section">
        <h3 class="section-title">商家信息</h3>
        <ul class="detail">
          <li>
            <span class="bold">品类</span>
            <span>{{shopsinfo.category}}</span>
          </li>
          <li>
            <span class="bold">商家电话</span>
            <span>{{shopsinfo.phone}}</span>
          </li>
          <li>
            <span class="bold">地址</span>
            <span>{{shopsinfo.address}}</span>
          </li>
          <li>
            <span class="bold">营业时间</span>
            <span>{{shopsinfo.workTime}}</span>
          </li>
        </ul>
      </section>
    </div>11
  </div>
</template>

<script>
import BScroll from '@better-scroll/core'
import { mapState } from 'vuex'
export default {
  data() {
    return {
      msg: 'Hello Vue.js'
    }
  },
  computed: {
    ...mapState(['shopsinfo'])
  },
  mounted: function() {
    this.$nextTick(() => {
      new BScroll('.shop-info')
      let ul = this.$refs.ul
      let width = 140 * this.shopsinfo.pics.length
      ul.style.width = width + 'px'
      new BScroll('.pic-wrapper', { scrollX: true,bounce: false })
    })
  }
}
</script>
<style lang="stylus" scoped>
.shop-info {
  background-color: #f3f3f3;
  height: 80vh;
  overflow: hidden;

  .info-content {
    padding-bottom: 110px;
  }

  .section-title {
    font-size: 16px;
    font-weight: 700;
  }

  .title {
    display: block;
    font-size: 16px;
    font-weight: 700;
  }

  .activity {
    padding-bottom: 10px;
    font-size: 13px;
    color: #a29696;

    div {
      margin: 4px;
      text-align: top;
    }

    .biaoji {
      margin: 5px;
    }
  }

  .delivery {
    font-size: 13px;
    color: #a29696;
  }

  .section {
    background-color: #fff;
    padding: 0 10px;
  }

  .delivery .delivery-icon {
    background-color: #02a774;
    color: #fff;
    display: inline-block;
    padding: 3px;
    margin-right: 5px;
  }
}

.pic-wrapper {
  width: 100vw;
  overflow: hidden;

  .pic-contain {
    display: flex;

    img {
      margin: 10px;
    }
  }
}

.detail {
  margin-bottom: -16px;

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-right: -10px;
    padding: 16px 12px 16px 0;
    line-height: 16px;
    font-size: 13px;
    border-bottom soild 1px #ccc
  }
}
</style>