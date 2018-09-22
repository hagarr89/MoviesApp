<template>
  <div class="movies-main">
    <div class="filters-wrap d-none d-md-block" >
    <div class="container">
      <div class="row align-items-center">
        <div class="col-auto">
<label class="label-style"> 
        <span class="placeholder">Filter movie By:</span>
          <select name="filterBy" v-model="filterBy" class="input-style" >
              <option value="name">Name</option>
              <option value="director">Director</option>
              <option value="categoreis">Categoreis</option>
              <option value="rating">Rating</option>
          </select>
      </label>
        </div>
          <div class="col-auto" v-if="filterBy != 'rating'">
             <label class="label-style">
        <input type="text" name="str" v-model="filterStr" class="input-style filterStr"   placeholder="Im searching for..."/>
      </label>
          </div>
      </div>
    </div>
    </div>
      <div class="container-fluid">
        <div class="row no-gutters">
          <div class="col-md-4 col-sm-6 col-xs-12" v-for="movie in filtersMovies" :key="movie.id" >
            <movie-comp :movie="movie" @openmovie = "openMovie"></movie-comp>
          </div>
        </div>
      </div>
      <movie-modal @close="closeModal"></movie-modal>
  </div>
</template>

<script>

import{mapState} from 'vuex'
import MovieComp from '../components/MovieComp'
import MovieModal from '../components/MovieModal'

export default {
  
  data(){
    return{
       filterBy:'name',
       filterStr:'',
    }
  },
  components:{MovieComp, MovieModal},
  mounted(){
  
  },
  computed:{
      ...mapState({
          movies: state => state.movies.movies,
          movieModalShow: state => state.movies.movieModalShow
      }),
      filtersMovies(){
         if(this.filterBy === 'rating')
            return this.filterRating();
        
        if(!this.filterStr)
          return this.movies;
       else
         return this.filterItems();
          
      }
  },
  watch:{
        filterStr(){
          this.filterItems();
        }
  },
  methods:{
    filterItems() {
      return this.movies.filter((obj)=> {
        let el = obj[this.filterBy];
          let res =  el.toLowerCase().indexOf(this.filterStr.toLowerCase()) > -1;
          return res;
      })
    },
    filterRating(){
      return this.movies.filter((obj)=> {
        let el = obj[this.filterBy];
          return el >= 80;
      })
    },
    closeModal(){
     this.$store.commit('movies/setcurrentMovie' , null);
      this.$store.commit('movies/setMovieModalShow' , false);
    },
    openMovie(movie){
       this.$store.commit('movies/setcurrentMovie' , movie);
      this.$store.commit('movies/setMovieModalShow' , true);

    },
    async buildSomthing(currDate){     
      let res = [];
      await this.$store.dispatch('getDataChart' , currDate);
      res = [this.CurrentdataChart.date , this.CurrentdataChart.rates.EUR ,this.CurrentdataChart.rates.GBP,  this.CurrentdataChart.rates.USD]
      console.log('res' , res);
          this.chartData.push( res );
    }
  }
}
</script>

<style lang="scss">
.movies-main{
  color: #000;
  .filters-wrap{
        background: rgba(0, 0, 0, 0.9);
    color: #fff
  }
  .container-fluid{
    padding: 0;
  }
}
</style>

