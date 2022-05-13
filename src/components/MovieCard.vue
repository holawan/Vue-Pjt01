<template>
  <div>
    <!-- {{movie.title}}
    {{movie.overview}}
    <img :src="url" alt="">
    <hr> -->

    <b-card
    :title= "movie.title"
    :img-src= url
    img-alt="Image"
    img-top
    tag="article"
    style="max-width: 20rem; max-height: 30rem;" 
    class="mb-2"
  >
    <b-card-text class="text">
      "{{movie.overview}}"
    </b-card-text>

    </b-card>
  </div>
</template>

<script>

export default {
  name:'MovieCard',
  props:{
    movie:Object,
  }
  ,
  computed:{
    url () {
      return 'https://image.tmdb.org/t/p/w300'+this.movie.poster_path
    }
  }
}
</script>

<style>
.text{
  text-overflow: ellipsis;
  /* white-space: nowrap; */
  /* word-break:break-all; */

  /* width: 20rem; 
  height: 30rem; */


}


</style>