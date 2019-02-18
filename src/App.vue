<template>
  <div id="app">
    <keep-alive include="Home">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App',
  created(){  //将图片存储在客户端中
    //页面加载时读取sessionStorage里的图片信息
    if(sessionStorage.getItem("galleryImgs")){
      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("galleryImgs"))))
    }
    //在页面刷新时将vuex中的图片信息保存到sessionStorage里
    window.addEventListener("beforeunload",() => {
      sessionStorage.setItem("galleryImgs",JSON.stringify(this.$store.state))
    })
  }
}
</script>

<style>
</style>
