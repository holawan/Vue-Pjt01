<template>
  <div>
    <h1>시계는 와치!</h1>
    <input type="text" @keyup.enter="inputMovie" v-model="movieTitle">
    <button @click="inputMovie">add</button>
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

</style>