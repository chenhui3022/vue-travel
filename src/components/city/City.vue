<template>
    <div class="city" ref="wrapper">
      <div>
        <city-header :cities="cities"></city-header>
        <city-list :list="hotCities" :cities="cities" @change="handleLetterChange" :letter="letter"></city-list>
      </div>
    </div>
</template>

<script>
  import CityHeader from './child/Header.vue'
  import CityList from './child/List.vue'

  import axios from 'axios'

    export default {
        name: 'City',
        components:{
          "city-header":CityHeader,
          "city-list":CityList
        },
        data(){
          return{
            cities:{},
            hotCities:[],
            letter:''
          }
        },
        methods:{
          getCityInfo(){
            axios.get('/api/city.json').then(this.handleGetCityInfoSucc)
          },
          handleGetCityInfoSucc(res){
            res = res.data
            if(res.ret && res.data){
              const data = res.data
              this.cities = data.cities
              this.hotCities = data.hotCities
            }
            console.log(res)
          },
          handleLetterChange(letter){
            this.letter = letter
          }
        },
        mounted(){
          this.getCityInfo()
        }

    }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

</style>
