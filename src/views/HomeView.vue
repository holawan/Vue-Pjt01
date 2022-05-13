<template>
  <div class="home container ">
    <movie-card class="col-3"
    v-for="movie in movies" :key="movie.id" :movie="movie"
    ></movie-card>
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
