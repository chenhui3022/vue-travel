<template>
    <div class="location">
      <router-link  to="/city">
        <div class="location-left">
          <span class="iconfont">&#xe63f;</span>
          {{this.city}}
        </div>
      </router-link>
      <div class="location-right">
        <span class="iconfont">&#xe76c;</span>
        必游榜单
      </div>
    </div>
</template>

<script>
    import { mapState } from 'vuex'
    export default {
        name: 'HomeLocation',
        computed:{
          ...mapState(['city'])
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.location
  height 0
  padding-bottom 10%
  .location-left
    float left
    width 50%
    padding-bottom: 10%
    color black
    text-align center
    box-sizing border-box
    padding .23rem
    border-top 0.01rem solid #cacaca
    border-right 0.01rem solid #cacaca
  .location-right
    float right
    width 50%
    padding-bottom: 10%
    text-align center
    box-sizing border-box
    padding .23rem
    border-top 0.01rem solid #cacaca
</style>
