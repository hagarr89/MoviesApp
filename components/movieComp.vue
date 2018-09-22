<template>
  <div class="movie-comp" @click="showMovie()">
        <div class="movie_inner_comp">
            <div class="poster" :style="{backgroundImage: `url(https://image.tmdb.org/t/p/w300_and_h450_bestv2/${movie.poster})` }"></div>
        </div>
  </div>
</template>

<script>

import{mapState} from 'vuex'

export default {
    name:'movie-comp',
    props:['movie'],
  data(){
    return{
     modalShow:false
    }
  },
  mounted(){
  
  },
  computed:{
  },
  methods:{
      showMovie(){
          this.$emit('openmovie' , this.movie);
        
      }

  }
}
</script>

<style lang="scss" src="../styles/pages/movieComp.scss">
</style>

