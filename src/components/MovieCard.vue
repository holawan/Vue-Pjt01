<template>
  <!-- <div class="embed-responsive embed-responsive-4by3">

    <b-card 
    :title= "movie.title"
    :img-src= url
    img-alt="Image"
    img-top
    tag="article"
    style="width: 300px; max-height: 100px" 
    class="mb-2 card-img-top embed-responsive-item"
  >
    <b-card-text class="text">
      "{{movie.overview}}"
    </b-card-text>

    </b-card>
  </div> -->
  <div class="card" style="width: 18rem; max-height: 300px;">
  <img class="card-img-top" :src=url alt="Card image cap">
  <br>
    <h5>{{movie.title}}</h5>
  <div class="card-body">
    <p class="card-text">{{movie.overview}}</p>
  </div>
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
      return 'https://image.tmdb.org/t/p/w400/'+this.movie.poster_path
    }
  }
}
</script>

<style>

.card-text{
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: break-word;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;  
}
</style>