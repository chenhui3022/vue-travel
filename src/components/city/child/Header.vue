<template>
    <div class="header">
      <div class="header-top">
        <router-link to="/">
          <span class="iconfont arrow_icon">&#xe624;</span>
        </router-link>
        <div class="country">城市选择</div>
      </div>
      <div class="search">
        <input v-model="keyword" class="search-input" type="text" placeholder="输入城市名或拼音">
      </div>
      <div  class="search-content" ref="search" v-show="keyword">
        <ul>
          <li class="content" v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">{{item.name}}</li>
          <li class="content" v-show="hasNoData">没有找到匹配数据</li>
        </ul>
      </div>
    </div>
</template>

<script>
    import Bscroll from 'better-scroll'
    import { mapMutations } from 'vuex'

    export default {
        name: 'CityHeader',
        props:{
          cities:Object
        },
        data(){
          return{
            keyword:'',
            list:[],
            timer:null
          }
        },
        computed:{
          hasNoData(){
            return !this.list.length
          }
        },
        methods:{
          handleCityClick(city){
            this.changeCity(city)
            this.$router.push('/')
          },
          ...mapMutations(['changeCity'])
        },
        watch:{
          keyword(){
            if(this.timer){
              clearTimeout(this.timer)
            }
            if(!this.keyword){
              this.list = []
              return
            }
            this.timer = setInterval(() => {
              const result = []
              for(let i in this.cities) {
                this.cities[i].forEach((value) => {
                  if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
                    result.push(value)
                  }
                })
              }
              this.list = result
            },100)
          }

        },
        mounted(){
          this.scroll = new Bscroll(this.$refs.search,{
            click:true
          })
        }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .header
    overflow hidden
    height 1.64rem
    line-height .86rem
    text-align center
    color white
    background #00afc7
    .header-top
      .iconfont
        float left
        line-height: 0.48rem;
        margin-left .12rem
        font-weight bold
        color white
        margin-top .1rem
      .country
        width 100%
        margin 0 auto
        height .64rem
        line-height .8rem
        font-size .35rem
    .search
      height .6rem
      line-height .64rem
      margin-top .15rem
      margin-right  .2rem
      margin-left .2rem
      background #ffffff
      border-radius .08rem
      color #333333
    .search-content
      z-index 1
      overflow hidden
      position absolute
      top 1.6rem
      left 0
      right 0
      bottom 0
      background :#fff
      color #333333
      .content
        text-align left
        padding-left 10px
        border-bottom 1px solid #eee
        width 100%
</style>
