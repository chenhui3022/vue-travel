<template>
    <div class="ticket">
      <div class="price" v-for="(item,index) in list" :key="index"
        v-show="item.ticket">
        <div class="ticket-price">
          <span class="title-img iconfont">&#xe68c;</span>
          {{item.ticket}}
        </div>
        <div v-if="item.children" class="item-children">
          <ticket :list="item.children"></ticket>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ticket',
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
