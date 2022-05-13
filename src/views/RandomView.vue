<template>
  <div>

    <button @click="randomSelect">pick!
    </button>
    <div v-if="movie.title">
          <b-card
    :title= "movie.title"
    :img-src= url
    img-alt="Image"
    img-top
    tag="article"
    style="width: 20rem; height: 30rem;" 
    class="mb-2"
  >
    <b-card-text class="text">
      "{{movie.overview}}"
    </b-card-text>

    </b-card>

    </div>
    <p v-else> PICK!!!</p>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'RandomView',
  methods:{
    randomSelect(){
      this.$store.dispatch('getMovie')
    }
  },
    computed:{
    ...mapState(['movie']),
      url () {
      return 'https://image.tmdb.org/t/p/w500'+this.movie.poster_path
    }
  }
}
</script>

<style>

</style>