<template>
  <div class="like">
    <div class="title">周末去哪儿</div>
    <ul>
      <router-link  tag="li" :to="'/punch/' + item.id" class="item" v-for="item of list" :key="item.id">
        <div class="item-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
        </div>
      </router-link>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'HomeWeekend',
    props:{
      list:Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/mixin.styl"
  .like
    width 100%
    .title
      line-height: .7rem
      text-indent :.1rem
      padding-left .1rem
      padding-top .1rem
      background #f0f0f0
    .item-wrapper
      overflow hidden
      height 0
      padding-bottom 33.9%
      padding-top .1rem
      background #f0f0f0
      .item-img
        width 100%
    .item-info
      font-family "微软雅黑"
      padding .1rem
      .item-title
        padding-top .1rem
        line-height .4rem
        font-size .32rem
        ellipsis()
        width 30%
      .item-desc
        line-height .4rem
        font-size 12px
        padding-bottom .1rem
        ellipsis()
        width 80%

</style>
