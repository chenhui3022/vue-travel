<template>
    <div class="icons">

      <swiper :options="swiperOption">
        <!-- slides -->
        <swiper-slide v-for="(page,index) in pages" :key="index">
          <div class="icon" v-for="item in page" :key="item.id">
            <div class="icon-img">
              <img class="icon-type" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>
    </div>
</template>

<script>
    export default {
        name: 'HomeIcons',
        data(){
          return {
            swiperOption:{
              pagination:'.swiper-pagination',
              autoplay:false
            }
          }
        },
        props:{
          list:Array
        },
        computed:{
          pages () {
            const pages = []
            this.list.forEach((item,index) => {
              const page = Math.floor(index/8)
              if(!pages[page]){
                pages[page] = []
              }
              pages[page].push(item)
            })
            return pages
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
@import "~styles/varibles.styl"
@import "~styles/mixin.styl"
.icons >>> .swiper-pagination-bullet-active
  background $bgcolor
.icons >>> .swiper-pagination
  bottom 0
.icons >>> .swiper-container
  overflow hidden
  height 0
  padding-bottom 50%
.icon
  position relative
  overflow: hidden
  float left
  width 25%
  height 0
  padding-bottom 23%
  .icon-img
    position absolute
    top:0
    right 0
    left:0
    bottom .44rem
    box-sizing border-box
    padding .05rem
    .icon-type
      height 100%
      display block
      margin 0 auto
  .icon-desc
    position absolute
    right 0
    left:0
    bottom 0
    height .44rem
    line-height .25rem
    text-align center
    color $darkTextColor
    ellipsis()
</style>
