<template>
  <div>
    <br>
    <br>
    <br>
    <div class="home container" >
      <br>
      <br>
      <div class="row justify-content-center">
        <movie-card  
        v-for="movie in movies" :key="movie.id" :movie="movie"
        ></movie-card>

      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'
import { mapState } from 'vuex'

export default {
  name: 'HomeView',
  components:{
    MovieCard,
  },
  created(){  
    this.$store.dispatch('getMovie')
  },
  computed:{
    ...mapState(['movies'])
    
  }
}
</script>

<style>
.home{
  display: flex;

}

</style>
