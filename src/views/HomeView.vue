<template>
  <div class="home">
    <movie-card></movie-card>
  </div>
</template>

<script>
// @ is an alias to /src
import MovieCard from '@/components/MovieCard.vue'


export default {
  name: 'HomeView',
  components:{
    MovieCard,
  },
  created(){  
    this.$store.dispatch('getMovie')
  }
}
</script>
