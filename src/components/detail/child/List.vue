<template>
    <div class="list">

      <div class="price" v-for="(item,index) in list" :key="index">
        <div class="ticket-price">
          <span class="title-img iconfont">&#xe61c;</span>
          {{item.title}}
        </div>
        <div v-if="item.children" class="item-children">
          <detail-list :list="item.children"></detail-list>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'detail-list',
        props:{
          list:Array
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .ticket-price
    height .8rem
    line-height .8rem
    font-size .35rem
    padding-left .2rem
    .title-img
      color: $bgcolor
  .item-children
    padding :0 .2rem
</style>
