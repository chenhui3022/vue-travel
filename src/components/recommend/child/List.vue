<template>
    <div class="list">
      <ul>
        <router-link  tag="li" :to="'/detail/' + item.id" class="item" v-for="item of list" :key="item.id">
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
        name: 'RecommendList',
        props:{
          list:Array
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/mixin.styl"
  .item-wrapper
    .item-img
      width 100%
  .item-info
    font-family "微软雅黑"
    padding .1rem
    .item-title
      padding-top .1rem
      line-height .5rem
      font-size .35rem
      color #000000
    .item-desc
      line-height .5rem
      font-size 12px
      padding-bottom .1rem
      ellipsis()
      width 80%
</style>
