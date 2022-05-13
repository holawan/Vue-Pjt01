<template>
  <div>
    <br>
    <div id="mainWatch">
      <br>
      <h1>춘식이의 워너비 영화 </h1>
      <br>
      <input class="mx-4" type="text" @keyup.enter="inputMovie" v-model="movieTitle">
      <button class="btn btn-secondary" @click="inputMovie">add</button>
      <br>
      <br>
    </div>
    <br>
    <br>
  </div>
</template>

<script>
export default {
  name:'WatchListForm',
  data(){
    return {movieTitle:''}
  },
  methods:{
    inputMovie(){
      const createdMovie = this.movieTitle
      if (createdMovie){
        this.$store.dispatch('wannabeMovie',createdMovie)
        this.movieTitle = ''
      }

    }
  }
}
</script>

<style>
#mainWatch{
  background-color: rgba(131, 201, 255, 0.803);
  border-radius: 30px;
}
</style>