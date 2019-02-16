<template>
    <div class="week">
      <div class="list">
        <div class="list_left">
          <span class="list-img iconfont">&#xe606;</span>
          <span>本周热门榜单</span>
          <span class="icon iconfont">&#xe62d;</span>
          <span class="total-list">全部榜单</span>
        </div>
      </div>
      <div class="wrapper">
        <div class="swiper">
          <!-- swiper -->
            <swiper :options="swiperOption">
              <swiper-slide v-for="item in list" :key="item.id">
                <router-link :to="'/detail/' + item.id">
                  <div  @click="handleIdClick(item.id)">
                    <img class="swiper-img" :src="item.imgUrl" alt="">
                  </div>
                  <p class="desc">{{item.desc}}</p>
                  <p class="desc">
                    <span class="sign">￥</span>
                    <span class="num">{{item.price}}</span>
                    起</p>
                </router-link>
              </swiper-slide>
            </swiper>

        </div>
      </div>

    </div>
</template>

<script>
  export default {
    name: 'HomeWeek',
    data(){
      return {
        swiperOption: {
          slidesPerView: 3.5,
          spaceBetween: 10,
          freeMode: true
        }
      }
    },
    props:{
      list:Array
    },
    methods:{
      handleIdClick(id){
        this.$store.commit('SendId',id)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/mixin.styl"
.list
  padding-top .2rem
  background #eee
  .list_left
    background #ffffff
    padding-top .3rem
    .list-img
      width 15px
      margin-top -.1rem
      padding-left .1rem
      color: orangered
    .total-list
      float right
      font-size .2rem
    .icon
      float right
      font-size .2rem
      padding 0 .1rem
.wrapper
  background #eee
  padding-bottom :3%
  .swiper >>> .swiper-slide:first-child
    padding-left 10px
  .swiper
    background #ffffff
    overflow :hidden
    width :100%
    height:0
    padding-bottom :45%
    /*background :#eee*/
    .swiper-img
      width 100%
      padding-top 20px
    .desc
      color #333333
      line-height 22px
      text-align center
      font-size .12rem
      ellipsis()
      .sign
        color: orange
      .num
        color orange
        margin-left -.1rem

</style>
