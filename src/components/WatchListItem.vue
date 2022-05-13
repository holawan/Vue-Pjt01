<template>
  
  <div class="d-flex justify-content-center">
    <!-- <div class="img" style="{'background-image': 'url('@/assets/bg.png')'}">
      <div class="content">
        <h2>{{wannabe}}</h2>
        </div>
        <div class="img-cover"></div>
    </div> -->
    <div class="jb-wrap">
      <div class="jb-image"><img src="@/assets/bg.png" alt=""></div>
      <h3 class="jb-text">
        {{wannabe}}
      </h3>
    </div>
  </div>
</template>

<script>

export default {
  name:'WatchListItem',
  props:{
    wannabe:String,
  },


}

</script>

<style>
.img{
    position: relative;
    /* background-image: '@/assets/bg.png';                                                                */
    height: 100vh;
    background-size: cover;
}
/* 
.img .content{
     position: absolute;
     top:50%;
     left:50%;
     transform: translate(-50%, -50%);                                                                   
     font-size:5rem;
     color: black;
     z-index: 2;
     text-align: center;
} */
  .jb-wrap {
    width: 300px;
    position: relative;
  }
  .jb-wrap img {
    width: 100%;
    vertical-align: middle;
  }
  .jb-text {
    padding: 5px 10px;
    text-align: center;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate( -50%, -50% );
  }
</style>