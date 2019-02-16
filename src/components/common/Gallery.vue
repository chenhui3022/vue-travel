<template>
    <div class="gallery"  @click="handelGallaryClick">
      <div class="wrapper">
        <swiper :options="swiperOptions">
          <swiper-slide v-for="(item,index) in imgs" :key="index">
            <img class="gallary-img" :src="item">
          </swiper-slide>
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>

      </div>
    </div>
</template>

<script>
    export default {
        name: 'Gallery',
        props:{
          imgs:Array
        },
        data(){
          return{
            swiperOptions:{
              pagination:'.swiper-pagination',
              paginationType:'fraction',   //分页器
              observeParents:true,
              observer:true,
              loop:true,
              autoplay:1000,
              speed:200,
            }
          }
        },
        methods:{
          handelGallaryClick(){
            this.$emit('close')
          }
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.gallery >>> .swiper-container
  overflow inherit
.gallery
  display flex
  flex-direction column
  justify-content center
  z-index 99
  position fixed
  top:0
  left 0
  right 0
  bottom 0
  background #000
  .wrapper
    width 100%
    height:0
    padding-bottom 100%
    .gallary-img
      width 100%
    .swiper-pagination
      color white
      bottom -1rem


</style>
