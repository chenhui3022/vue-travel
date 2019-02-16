<template>
  <div>
    <div class="banner">
      <div >
        <img class="banner-img" :src="this.bannerImg" alt="">
      </div>
      <div class="banner-info">
        <div class="banner-number" @click="handleImgClick(galleryImgs)">
          <span class="title-img iconfont">&#xe678;</span>
          {{this.galleryImgs.length}}
        </div>
        <div class="banner-title">{{this.sightName}}</div>
      </div>
    </div>

  </div>
</template>

<script>
  import  { mapMutations,mapState } from 'vuex'
  export default {
    name: 'DetailBanner',
    props:{
      sightName:String,
      bannerImg:String,
      galleryImgs:Array
    },
    data(){
      return{
        list:[]
      }
    },
    methods:{
      handleImgClick(galleryImgs){
        this.$store.commit('setImgs',this.galleryImgs)
        this.$router.push('/detail/' + this.$store.state.id + '/Pics')
      }
    }

  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .banner
    overflow: hidden
    position relative
    .banner-back
      position absolute
      top:0
      right 0
      left 0
      width .7rem
      height .7rem
      border-radius 1rem
      background :rgba(0,0,0,.6)
      margin .1rem 0 0 .1rem
    .banner-img
      width :100%
      height 206px
    .banner-info
      position absolute
      right 0
      left 0
      bottom .4rem
      color #fff
      padding-left .2rem
      .banner-number
        height .4rem
        width:20%
        line-height .36rem
        margin-right .4rem
        border-radius  .2rem
        background :rgba(0,0,0,.5)
        font-size:  .24rem
      .banner-title
        height .5rem
        line-height .6rem
        font-size .35rem
      .banner-number
        text-align center
</style>
