<template>
  <div id="app">
    <keep-alive include="Home,City">
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
  export default {
    name: 'App',
//  created(){  //将图片存储在客户端中
//    if(sessionStorage.getItem("galleryImgs")){
//      this.$store.replaceState(Object.assign({},this.$store.state,JSON.parse(sessionStorage.getItem("galleryImgs"))))
//    }
//    window.addEventListener("beforeunload",() => {
//      sessionStorage.setItem("galleryImgs",JSON.stringify(this.$store.state))
//    })
//  }
  }
</script>

<style>
</style>
