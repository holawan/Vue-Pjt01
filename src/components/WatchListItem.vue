<template>
  <!-- flex와 justify를 줘서 중앙 정렬한다. -->
  <div class="d-flex justify-content-center">
    <!-- 이미지 위에 글씨를 덮어쓴다. -->
    <div class="jb-wrap">
      <!-- 이미지는 assets에서 가져오고, -->
      <div class="jb-image"><img src="@/assets/bg.png" alt=""></div>
      <!-- text를 넣어준다. -->
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