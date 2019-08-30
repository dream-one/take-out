<template>
  <div>
    <Head title="发现"></Head>
    <div class="amap-wrapper">
      <el-amap
        class="amap-box"
        :touchZoom="true"
        :zoomEnable="true"
        :zoom="zoom"
        :isHotspot="hot"
        :vid="'amap-vue'"
        :center="center"
        :plugin="plugin"
      >
      </el-amap>
    </div>
  </div>
</template>

<script>
import Head from "../HeadTop/HeadTop";

export default {
  data() {
    let self = this;
    return {
      hot: true,
      zoom: 15,
      center: [122, 31.197646],
      lng: 0,
      lat: 0,
      loaded: false,
      plugin: [
        {
          pName: "Geolocation",
          events: {
            init(o) {
              // o 是高德地图定位插件实例
              o.getCurrentPosition((status, result) => {
                if (result && result.position) {
                  self.lng = result.position.lng;
                  self.lat = result.position.lat;
                  self.center = [self.lng, self.lat];
                  self.loaded = true;
                  self.$nextTick();
                }
              });
            }
          }
        }
      ]
    };
  },
  mounted() {},
  components: {
    Head
  }
};
</script>

<style lang="stylus" scoped>
.amap-wrapper {
  height: 300px;
  width: 70%;
}
</style>