<template>
  <div>
    <!-- watch-list-form을 가져온다. -->
    <watch-list-form></watch-list-form>
    <!-- 보고싶은 영화 리스트는 for문을 돌려서 가져온다. -->
    <watch-list-item
      v-for="(wannabe,idx) in wannabes" :key="idx" :wannabe_lst="[wannabe,idx]" 
    ></watch-list-item>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// WatchListView는 Item과 Form을 자식으로 가진다.
import WatchListItem from '@/components/WatchListItem.vue'
import WatchListForm from '@/components/WatchListForm.vue'
export default {
  components:{
    WatchListItem ,
    WatchListForm,
  } ,
  // vuex에서 계산된 wannabes를 가져온다.
  computed:{
    ...mapState(['wannabes'])
  }

}
</script>

<style>

</style>