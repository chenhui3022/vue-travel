<template>
    <div class="swiper">
      <swiper :options="swiperOption" v-if="showSwiper">
        <!-- slides -->
        <swiper-slide v-for="item of list" :key="item.id">
          <img class="swiper-img" :src="item.imgUrl" alt="">
        </swiper-slide>

        <!-- Optional controls -->
        <div class="swiper-pagination"  slot="pagination"></div>
        <!--<div class="swiper-button-prev" slot="button-prev"></div>-->
        <!--<div class="swiper-button-next" slot="button-next"></div>-->
        <!--<div class="swiper-scrollbar"   slot="scrollbar"></div>-->
      </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeSwiper',
        data(){
          return {
            swiperOption:{
              //圆点
              pagination:'.swiper-pagination',

              //按钮
//              nextButton:'swiper-button-next',
//              prevButton:'swiper-button-prev',
              //滚动条
//              scrollbar:'swiper-scrollbar',

//              slidesPerView: 3,
              autoplay:1000,
              speed:200,
              loop:true
            }
          }
        },
        props:{
          list:Array
        },
        computed:{
          showSwiper(){
            return this.list.length
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .swiper >>> .swiper-pagination-bullet-active
    background #ffffff
  .swiper
    overflow :hidden
    width :100%
    height:0
    padding-bottom :26.66%
    background :#eee
    .swiper-img
      width 100%
</style>
