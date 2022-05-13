<template>
  <div>
    <br>
    <br>
    <br>
    <!-- container선언하기  -->
    <div class="home container" >
      <br>
      <br>
      <!-- card 열을 맞춰주기 위해 row클래스를 주고, justify-content center -->
      <div class="row justify-content-center">
        <!-- movie.id를 key로 movies 배열을 돌면서, movie를 넘겨주기 -->
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
  // HomeView를 생성하면서 dispatch에서 getMovie action을 호출
  created(){  
    this.$store.dispatch('getMovie')
  },
  // State에서 movies를 가져오기 
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
