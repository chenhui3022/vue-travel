<template>
    <div class="header">
      <router-link tab="div" to="/" class="header-abs" v-show="showTab">
        <div class="iconfont header-abs-back">&#xe624</div>
      </router-link>
      <div class="header-fixed" v-show="!showTab" :style="opacityStyle">
        <router-link to="/">
          <div class="iconfont header-fixed-back">&#xe624</div>
        </router-link>
        景点详情
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Header',
        data(){
          return{
            showTab:true,
            opacityStyle:{
              opacity:0
            }
          }
        },
        methods:{
          handleScroll(){
            const top = document.documentElement.scrollTop
            if(top > 45){
              let opacity = top/140
              opacity = opacity > 1 ? 1 : opacity
              this.opacityStyle = { opacity }
              this.showTab = false
            }else {
              this.showTab = true
            }
          }
        },
        mounted(){
          window.addEventListener('scroll',this.handleScroll)
        },
        deactivated(){
          window.removeEventListener('scroll',this.handleScroll)
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~styles/varibles.styl"
  .header-abs
    position: absolute
    left: .2rem
    top: .2rem
    width: .7rem
    height: .7rem
    line-height :.7rem
    text-align:center
    border-radius :.4rem
    background :rgba(0,0,0,.8)
    .header-abs-back
      color: #ffffff
      font-size :.4rem
  .header-fixed
    z-index:2
    position :fixed
    top: 0
    right: 0
    left: 0
    height :$headerHeight
    line-height :$headerHeight
    text-align :center
    color: #ffffff
    background :$bgColor
    font-size :.32rem
    .header-fixed-back
      position: absolute
      top:0
      left:0
      width :.64rem
      text-align :center
      font-size :.4rem
      color: #fff
</style>
