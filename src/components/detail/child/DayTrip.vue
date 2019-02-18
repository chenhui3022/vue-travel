<template>
  <div class="dayTrip">
    <div class="price" v-for="(item,index) in list" :key="index" v-show="item.dayTrip">
      <div class="ticket-price">
        <span class="title-img iconfont">&#xe68c;</span>
        {{item.dayTrip}}
      </div>
      <div v-if="item.children" class="item-children">
        <dayTrip :list="item.children"></dayTrip>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'dayTrip',
    props:{
      list:Array
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
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
