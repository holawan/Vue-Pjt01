<template>
  <div>
    <br>
    <br>
    <button class="btn rounded-pill" @click="randomSelect" style="background-color:rgba(117, 150, 225, 0.786) ; color: white; width: 100px;" >pick!</button>
    <br>
    <br>
    <br>
    <!-- movie.title이 있으면 row선언, justify-content-center를 해주고 -->
    <div v-if="movie.title" class=" row justify-content-center">
    <!-- card는 grid를 3씩 차지하게 하고, 마진을 준 후, 크기 18rem으로 조정  -->
      <div class="col-3 card mx-4 mb-4" style="width: 18rem;padding-left:0px;">
      <!-- img는 아래 선언한 url을 src로 입력 -->
          <img class="card-img-top " :src=url alt="Card image cap" style="width:18rem; height:25rem; box-sizing:content-box;">
          <br>
          <!-- 아래 title을 불러오고  -->
            <h5>{{movie.title}}</h5>
          <div class="card-body">
            <!-- text칸에는 overview를 불러온다. -->
            <p class="card-text">{{movie.overview}}</p>
          </div>

      </div>

    </div>
    <!-- movie.title이 없을때는 PICK을 띄워서 랜덤으로 가져오게 한다. -->
    <p v-else> PICK!!!</p>

  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name:'RandomView',
  methods:{
    // radonmSelect를 실행하면 getMovie
    randomSelect(){
      this.$store.dispatch('getMovie')
    }
  },
  // movie를 가져오고, url은 tmdb에서 이미지를 가져오는 url에 poster_path를 붙여줘서, 영화 이미지를 가져올 url을 완성시킨다.
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