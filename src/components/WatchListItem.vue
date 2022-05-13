<template>
  
  <div>
    <div class="contents">
      <h5> {{wannabe}}</h5>
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
.contents{
  background-color: rgb(255, 192, 239);
  border-radius: 5px;
  color: rgb(108, 107, 107);
}
</style>