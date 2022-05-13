<template>
  <div>
    <br>
    <div id="mainWatch">
      <br>
      <h1>춘식이의 워너비 영화 </h1>
      <br>
      <!-- input은 button과 떼기 위해 마진을준다. -->
      <!-- enterKey를 누르면 inputMovie 메소드가 호출된다. v-model을 사용해서 input과 movieTitle이 동기화되게 한다. -->
      <input class="mx-4" type="text" @keyup.enter="inputMovie" v-model="movieTitle">
      <!-- click을 누르면 inputMovie 메소드를 실행한다. -->
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
      // 생성된 영화제목은 현재 영화의 제목 
      const createdMovie = this.movieTitle
      // 생성된 영화가 있으면 
      if (createdMovie){
        // createdMovie를 담아서 wannabeMovie action을 실행한다.
        this.$store.dispatch('wannabeMovie',createdMovie)
        // input은 빈 값으로 만들어준다.
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