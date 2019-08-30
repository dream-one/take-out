<template>

  <div >


    <router-view/>
    <Footer v-show="$route.meta.Footshow"></Footer>
  </div>
</template>
<script>
import Footer from './components/FootGuide/FooterGuide'
export default {
  components:{
    Footer
  }
}
</script>



<style lang="stylus" scoped>

#app
  font-family 'Avenir', Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50

#nav
  padding 30px
  a
    font-weight bold
    color #2c3e50
    &.router-link-exact-active
      color #42b983
</style>
