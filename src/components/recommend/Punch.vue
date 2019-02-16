<template>
    <div class="punch">
      <recommend-header></recommend-header>
      <recommend-list :list="punchList"></recommend-list>
    </div>
</template>

<script>
  import RecommendHeader from './child/Header.vue'
  import RecommendList from './child/List.vue'

  import axios from 'axios'
    export default {
        name: 'Punch',
        components:{
          'recommend-header':RecommendHeader,
          'recommend-list':RecommendList
        },
      data(){
        return{
          punchList: []
        }
      },
      methods:{
        getDetailInfo(){
          axios.get('/api/punch.json',{
            params:{
              id:this.$route.params.id
            }
          }).then(this.handleGetDataSucc)

        },
        handleGetDataSucc(res){
          res = res.data
          if(res.ret && res.data){
            const data = res.data
            this.punchList = data.punchList
          }
        }
      },
      mounted(){
        this.getDetailInfo()
      }
    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
