<template>
    <div class="like">
        <div class="title">
       <!--<img class="title-img" src="http://localhost:8080/images/xin.png" alt="">-->
        <span class="title-img iconfont">&#xe70c;</span>
        <span class="title-desc">猜你喜欢</span>
      </div>
      <ul>
        <router-link tag="li" class="item" v-for="item of list" :key="item.id" :to="'/detail/' + item.id">
          <img class="item-img" :src="item.imgUrl" alt="">
          <div class="item-info">
            <p class="item-title">{{item.title}}</p>
            <p class="item-star">{{item.star}}条评论</p>
            <p class="item-price">
              <span class="item-dec">￥</span>
              <span class="item-num">{{item.price}}</span>
              起
              <span class="item-addr">{{item.addr}}</span>
            </p>
          </div>
        </router-link>
      </ul>
      <div class="total">
        查看所有产品
      </div>
    </div>
</template>

<script>
   export default {
    name: 'HomeLike',
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
    line-height: .5rem
    margin-top :.2rem
    text-indent :.1rem
    padding-left .1rem
    .title-img
      color orangered
  .item
    overflow hidden
    display flex
    height 1.9rem
    padding-bottom .3rem
    padding-top .1rem
    border-bottom 0.01rem solid #cacaca
    .item-img
      width 1.9rem
      height: 1.9rem
      padding .1rem
    .item-info
      font-family "微软雅黑"
      flex 1
      padding .1rem
      min-width 0
      .item-title
        width 70%
        padding-top .2rem
        line-height .54rem
        font-size .32rem
        ellipsis()
      .item-star
        line-height .54rem
      .item-price
        line-height .4rem
        .item-dec
          color orange
        .item-num
          font-size .4rem
          color orange
          margin  -.08rem
        .item-addr
          width 30%
          float right
          text-align right
          padding-right .1rem
          ellipsis()
  .total
    line-height .8rem
    text-align center
    color: #25a4bb
    padding-bottom  -.1rem
</style>
