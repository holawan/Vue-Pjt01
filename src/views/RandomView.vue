<template>
  <div>
    <br>
    <br>
    <button class="btn rounded-pill btn-light" @click="randomSelect">pick!
    </button>
    <br>
    <br>
    <br>
    <div v-if="movie.title" class=" row justify-content-center">
      <div class="col-3 card mx-4 mb-4" style="width: 18rem;padding-left:0px;">
          <img class="card-img-top " :src=url alt="Card image cap" style="width:18rem; height:25rem; box-sizing:content-box;">
          <br>
            <h5>{{movie.title}}</h5>
          <div class="card-body">
            <p class="card-text">{{movie.overview}}</p>
          </div>

      </div>

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