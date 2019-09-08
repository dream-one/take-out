<template>
  <div>
    <shophead></shophead>
  </div>
</template>

<script>
import { shopsinfo } from '../../request/api'
import shophead from './shopHead.vue'
export default {
  // mounted() {
  //   shopsinfo()
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }
  components: {
    shophead
  }
}
</script>

<style>
</style>