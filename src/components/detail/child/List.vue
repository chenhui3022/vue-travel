<template>
    <div class="list">
      <div class="title">
        <div class="item" v-for="(item,index) in tabs"
             @click="toggleTab(index,item.view)"
             :class="{active:active === index}"
        >{{item.name}}</div>
      </div>
      <tab :is="currentTab" :list="list"></tab>
    </div>
</template>

<script>
  import ticket from './Ticket.vue'
  import dayTrip from './DayTrip.vue'
    export default {
        name: 'detail-list',
        props:{
          list:Array
        },
        data(){
          return {
            active: 0,
            currentTab: 'ticket',
            tabs: [
              {
                name: '门票',
                view: 'ticket'
              }, {
                name: '一日游',
                view: 'dayTrip'
              }
            ]
          }
        },
        methods:{
          toggleTab(i,v){
            this.active = i
            this.currentTab = v
          }
        },
        components:{
          ticket,
          dayTrip
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .list
    width 100%
    height 0
    padding-bottom 160%
    .title
      overflow hidden
      background #ffffff
      border-bottom .01rem solid #eee
      .item
        float left
        line-height .8rem
        font-size .34rem
        margin 0  1.4rem
        padding-left .1rem
        text-align center
      .active
        border-bottom  .03rem solid red
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
