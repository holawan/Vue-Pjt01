<template>
  <!-- flex와 justify를 줘서 중앙 정렬한다. -->
  <div class="d-flex justify-content-center">
    <!-- 이미지 위에 글씨를 덮어쓴다. -->
    <div class="jb-wrap">
      <!-- 이미지는 assets에서 가져오고, -->
      <div v-if="wannabe_lst[1]%2"  class="jb-image"><img src="@/assets/bg.png" alt=""></div>
      <div v-else class="jb-image"><img src="@/assets/bg3.png" alt=""></div>
      <!-- text를 넣어준다. -->
      <h3 class="jb-text">
        {{wannabe_lst[0]}}
      </h3>
    </div>
  </div>
</template>

<script>

export default {
  name:'WatchListItem',
  props:{
    wannabe_lst:Array,
  },
}

</script>

<style>
  .jb-wrap {
    width: 700px;
    position: relative;
    justify-content: center;
  }
  .jb-wrap img {
    width: 500px;
    height: 100px;
    vertical-align: middle;
    justify-content: center;
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