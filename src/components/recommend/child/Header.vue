<template>
  <div class="header">
    <div class="header-fixed" >
      <router-link to="/">
        <div class="iconfont header-fixed-back">&#xe624;</div>
      </router-link>
      深圳打卡
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RecommendHeader'

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .7rem
    height: .7rem
    line-height :.7rem
    text-align:center
    border-radius :.4rem
    background :rgba(0,0,0,.8)
    .header-abs-back
      color: #ffffff
      font-size :.4rem
  .header-fixed
    height :$headerHeight
    line-height :$headerHeight
    text-align :center
    color: #ffffff
    background :$bgColor
    font-size :.32rem
    .header-fixed-back
      position: absolute
      top:0
      left:0
      width :.64rem
      text-align :center
      font-size :.4rem
      color: #fff
</style>
