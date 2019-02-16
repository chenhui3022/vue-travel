<template>
    <div class="app">
      <home-header></home-header>
      <home-swiper :list="swiperList"></home-swiper>
      <home-icons :list="iconList"></home-icons>
      <home-location></home-location>
      <home-week :list="WeekList"></home-week>
      <home-like :list="likeList"></home-like>
      <home-weekend :list="weekendList"></home-weekend>
    </div>
</template>

<script>
  import HomeHeader from  './child/Header.vue'
  import HomeSwiper from  './child/Swiper.vue'
  import HomeIcons from  './child/Icons.vue'
  import HomeLocation from  './child/Location.vue'
  import HomeWeek from  './child/Week.vue'
  import HomeLike from  './child/Like.vue'
  import HomeWeekend from  './child/Weekend.vue'
  import { mapState } from  'vuex'

  import axios from 'axios'

    export default {
        name: 'App',
        components:{
          'home-header':HomeHeader,
          'home-swiper':HomeSwiper,
          'home-icons':HomeIcons,
          'home-location':HomeLocation,
          'home-week':HomeWeek,
          'home-like':HomeLike,
          'home-weekend':HomeWeekend
        },
        data(){
          return{
            swiperList:[],
            iconList:[],
            likeList:[],
            weekendList:[],
            WeekList:[],
            lastCity:''
          }
        },
        computed:{
          ...mapState(['city'])
        },
        methods:{
          getHomeInfo(){
            axios.get('/api/index.json?city=' + this.city)
              .then(this.getHomeInfoSucc)
          },
          getHomeInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
              const data = res.data
              this.swiperList = data.swiperList
              this.iconList = data.iconList
              this.likeList = data.likeList
              this.weekendList = data.weekendList
              this.WeekList = data.WeekList
            }
            console.log(res)
          }
        },
        mounted(){
          this.lastChild = this.city
          this.getHomeInfo()
        },
        activated(){
          if(this.lastChild !== this.city ){
            this.lastChild = this.city
            this.getHomeInfo()
          }
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
