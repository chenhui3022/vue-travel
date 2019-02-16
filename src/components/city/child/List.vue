<template>
  <div class="list" ref="wrapper">
    <div v-if="showSwiper">
      <div class="area">
        <div class="title">
          热门城市
        </div>
        <div class="button-list">
          <div class="button-wrapper"  v-for="item of list" :key="item.id" @click="handleCityClick(item.name)">
            <div class="button">{{item.name}}</div>
          </div>
        </div>
      </div>

      <div class="area">
        <div class="title">
          字母排序
        </div>
        <div class="alphabet-list" >
          <div class="alphabet-wrapper"   v-for="(item,key) of cities" @click="handleLetterCity">
            <div class="alphabet-button" >{{key}}</div>
          </div>
        </div>
      </div>

      <div class="area"  v-for="(item,key) in cities" :key="key" :ref="key">
        <div class="title">
          {{key}}
        </div>
        <div class="area-list">
          <div class="area-wrapper">
            <div class="area-button"  v-for="innerItem in item" :key="innerItem.id"  @click="handleCityClick(innerItem.name)">{{innerItem.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import  { mapMutations } from 'vuex'
  import Bscroll from 'better-scroll'
  export default {
    name: 'CityArea',
    props:{
      list:Array,
      cities:Object,
      letter:String
    },
    mounted(){
      this.scroll = new Bscroll(this.$refs.wrapper,{
        click:true
      })
    },
    methods:{
      handleLetterCity(e){
        this.$emit('change',e.target.innerHTML)
      },
      showSwiper(){
        return this.list.length
      },
      handleCityClick(city){
        this.changeCity(city)
        this.$router.push('/')
      },
      ...mapMutations(['changeCity'])
    },
    watch:{
      letter(){
        if(this.letter){
          const el = this.$refs[this.letter][0]
          this.scroll.scrollToElement(el)
            console.log(el)
        }
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
.list
  overflow hidden
  position absolute
  top 1.6rem
  left 0
  right 0
  bottom 0
  .area
    .title
      line-height .86rem
      font-size .26rem
      padding-left .2rem
      background #eee
    .button-list
      overflow :hidden
      background #eee
      .button-wrapper
        float :left
        width :33.33%
        .button
          line-height .7rem
          margin :.01rem
          padding:.01rem
          text-align :center
          background white
          color #333333
    .alphabet-list
      overflow :hidden
      background #ffffff
      .alphabet-wrapper
        float :left
        width :20%
        .alphabet-button
          line-height .7rem
          margin :.01rem
          padding:.01rem
          text-align :center
          background white
    .area-list
      overflow :hidden
      background #fff
      .area-button
        float :left
        width :24.7%
        line-height .7rem
        border-right  .01rem solid #eee
        border-bottom  .01rem solid #eee
        margin-right :.01rem
        text-align :center
        background white
        color #333333






</style>
