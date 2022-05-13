<template>


  <div class="col-3 card mx-4 mb-5" style="width: 18rem;padding-left:0px;">
      <img class="card-img-top " :src=url alt="Card image cap" style="width:18rem; height:25rem; box-sizing:content-box;">
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