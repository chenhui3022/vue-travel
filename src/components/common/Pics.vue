<template>
  <div class="pics" >
    <div class="header">
      <router-link :to="'/detail/' + this.$store.state.id">
        <span class="title-img iconfont">&#xe624;</span>
      </router-link>
      <span class="title">图片景区</span>
    </div>

    <div class="pic"  @click="handlePicsClick">
      <div class="pic-list" v-for="item of this.galleryImgs">
        <img class="img" :src="item" alt="">
      </div>
    </div>
    <common-fade>
      <common-gallery :imgs="this.galleryImgs" v-show="showGallery" @close="handleGallaryClose"></common-gallery>
    </common-fade>

  </div>
</template>

<script>
  import CommonGallery from 'common/Gallery'
  import CommonFade from 'common/Fade'
  import { mapState } from 'vuex'
  export default {
    name: 'DetailPics',
    data(){
      return{
        showGallery:false
      }
    },
    computed:{
      ...mapState(['galleryImgs'])
    },
    methods:{
      handlePicsClick(){
        this.showGallery = true
      },
      handleGallaryClose(){
        this.showGallery = false
      }
    },
    components:{
      "common-gallery":CommonGallery,
      "common-fade":CommonFade
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  .header
    overflow hidden
    height 0
    padding-bottom 10%
    z-index: 99
    background #ffffff
    position fixed
    right:0
    top:0
    left:0
    bottom:0
    .title-img
      position absolute
      top: .2rem
      left .2rem
      font-size .4rem
      font-weight bold
    .title
      position absolute
      top .22rem
      left 3.2rem
      font-size .3rem
  .pic
    background #eee
    position absolute
    top .8rem
    padding-top .1rem
    padding-left  .06rem
    .pic-list
      overflow hidden
      width 48%
      float: left
      padding .05rem
      .img
        width 100%

</style>
