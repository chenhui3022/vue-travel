<template>
    <div class="detail">
      <detail-banner :sightName="sightName" :bannerImg="bannerImg" :galleryImgs="galleryImgs"></detail-banner>
      <detail-header></detail-header>
      <detail-list :list="categoryList"></detail-list>

    </div>
</template>

<script>
  import DetailHeader from './child/Header.vue'
  import DetailBanner from './child/Banner.vue'
  import DetailList from './child/List.vue'

  import axios from 'axios'
  import Bscroll from 'better-scroll'
    export default {
        name: 'Detail',
        components:{
          'detail-header':DetailHeader,
          'detail-banner':DetailBanner,
          'detail-list':DetailList
        },
        data(){
          return{
            sightName: '',
            bannerImg: '',
            galleryImgs: [],
            categoryList: [],
            titles:[]
          }
        },
        methods:{
          getDetailInfo(){
            axios.get('/api/detail.json',{
              params:{
                id:this.$route.params.id
              }
            }).then(this.handleGetDataSucc)
          },
          handleGetDataSucc(res){
            res = res.data
            if(res.ret && res.data){
              const data = res.data
              this.sightName = data.sightName
              this.bannerImg = data.bannerImg
              this.galleryImgs = data.galleryImgs
              this.categoryList = data.categoryList
            }
          }
        },
        mounted(){
          this.getDetailInfo()

        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.detail
  height 10rem
</style>
