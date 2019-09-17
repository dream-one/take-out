
<template>
  <!-- // 弹出食物详情组件 -->
  <div class="contain">
    <div class="img-head">
      <img v-lazy='this.food.image' class="img" :src="this.food.image" alt />
      <p class="foodpanel-desc">{{food.info}}</p>
    </div>
    <div class="title">
      <span class="name">{{food.name}}</span>
      <div class="info">
        <span class="rating">月售{{food.sellCount}}份</span>
        <span class="rating">好评率{{food.rating}}%</span>
      </div>
    </div>
    <div class="bottom">
      <div class="price">￥{{food.price}}</div>
      <div>
        <carcon :food="food"></carcon>
      </div>
    </div>
  </div>
</template>

<script>
import carcon from './carcontor'
export default {
  props: {
    food: Object
  },
  mounted() {
    console.log(this.food)
  },
  components: {
    carcon
  }
}
</script>

<style lang="stylus" scoped>
.img {
  height: 40vh;
  width: 65vw;
}

.foodpanel-desc {
  color: #a59191;
  font-size: 12px;
  margin-top: 1;
}

.title {
  margin-bottom: 12px;

  .name {
    font-weight: bold;
    font-size: 22px;
    margin: 1px 5px;
  }

  .rating {
    margin: 1px 5px;
    font-size: 10px;
    color: #ccc;
  }
}

.price {
  font-size: 18px;
  color: red;
}

.bottom {
  display: flex;
  justify-content: space-between;
}

.bottom div {
  margin: 5px;
}
</style>