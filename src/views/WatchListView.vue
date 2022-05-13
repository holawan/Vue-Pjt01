<template>
  <div>
    <watch-list-form></watch-list-form>
    <watch-list-item
      v-for="wannabe in wannabes" :key="wannabe.idx" :wannabe="wannabe"
    ></watch-list-item>
  </div>
</template>

<script>
import {mapState} from 'vuex'
import WatchListItem from '@/components/WatchListItem.vue'
import WatchListForm from '@/components/WatchListForm.vue'
export default {
  components:{
    WatchListItem ,
    WatchListForm,
  } ,
  computed:{
    ...mapState(['wannabes'])
  }

}
</script>

<style>

</style>