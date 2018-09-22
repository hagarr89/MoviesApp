<template>
  <b-modal class="movie-modal" v-model="modalShow" hide-header	hide-footer centered	lazy no-close-on-backdrop>
      <a href="javascript:;" class="exit" @click="$emit('close')">X</a>
    <div class="movie-modal-container" v-if="movie">
       <div class="modal-movie-wrapper">
    <div class="movie-image">
           <img :src="`https://image.tmdb.org/t/p/original/${movie.poster}`" :alt="movie.name"/>
         </div>
          <div class="movie-content">
            <h1 class="name">{{movie.name}}</h1>
            <div class="desc">{{movie.description}}</div>
            <div class="desc">Director:  {{movie.director}}</div>
            <div class="desc">Rating: {{movie.rating}}</div>

          </div>
           
       </div>
      </div>
    </b-modal>
</template>

<script>

import{mapState} from 'vuex'

export default {
name:'movie-Modal',
  data(){
    return{
    
    }
  },
  mounted(){
  
  },
 computed:{
      ...mapState({
          movie: state => state.movies.currentMovie,
          movieModalShow: state => state.movies.movieModalShow
      }),
    modalShow:{
      get(){
          return this.movieModalShow
      },
      set(val){
        console.log("Setting new modalShow: " + val);
        return val;
      }
    }
  },
  methods:{

  }
}
</script>

<style lang="scss" src="../styles/pages/movieModal.scss">
</style>

