<template>
  <div class="cartcaontain">
    <div @click.stop="addf(false)" v-show="food.count" class="reduce">-</div>
    <div v-show="food.count" class="count">{{food.count}}</div>
    <div @click.stop="addf(true)" class="add">+</div>
  </div>
</template>

<script>
import { maoState, mapState } from "vuex";
export default {
  props: {
    food: Object
  },
  data() {
    return {

    };
  },
  methods: {
    addf(flag) {
      this.$store.dispatch('updata_foodCount',{flag,food:this.food})
      // this.$store.commit("addfoods", {  food: this.food });
    }
  },
  computed: {
    ...mapState(["foodscount"]),
    cuover() {

    },
    count(){

    }
  }
};
</script>

<style lang="stylus" scoped>
.cartcaontain {
  font-size: 15px;
  text-align: center;
  color: #fff;
  display: flex;

  .reduce {
    width: 21px;
    height: 20px;
    background-color: #2e943e;
    -webkit-border-radius: 5vh;
    line-height: 16px;
    font-weight: bold;
    font-size: 20px;
    margin: 0px 6px;
  }

  .count {
    font-size: 13px;
    color: #899c85;
    margin: 0px 6px;
  }

  .add {
    width: 21px;
    height: 20px;
    background-color: #2e943e;
    -webkit-border-radius: 5vh;
    line-height: 17px;
    font-weight: bold;
    font-size: 20px;
    margin: 0px 6px;
  }
}
</style>