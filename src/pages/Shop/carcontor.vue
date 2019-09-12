<template>
  <div class="cartcaontain">
    <div v-show="cuover" class="reduce">-</div>
    <div v-show="cuover" class="count">{{$store.state.foodscount}}</div>
    <div @click="addf" class="add">+</div>
  </div>
</template>

<script>
import { maoState, mapState } from "vuex";
export default {
  props: {
    food: Object,
    index: Number
  },
  data() {
    return {
      foods: 0
    };
  },
  methods: {
    addf() {
      this.foods += 1;
      this.$store.commit("addfoods", { index: this.index, foods: this.foods });
    }
  },
  computed: {
    ...mapState(["foodscount"]),
    cuover() {
    //    return this.$store.getters.watchfoods(this.index)
    
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