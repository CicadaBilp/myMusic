<template>
  <div>
    <hot-music></hot-music>
    <new-music></new-music>
    <wonder-hot></wonder-hot>
    <new-disc></new-disc>
    <charts></charts>
    <mv-list></mv-list>
    <div class="footer"></div>
  </div>
</template>

<script>
import HotMusic from 'components/indexBlock/HotMusic.vue'
import NewMusic from 'components/indexBlock/NewMusic.vue'
import WonderHot from 'components/indexBlock/WonderHot.vue'
import NewDisc from 'components/indexBlock/NewDisc.vue'
import Charts from 'components/indexBlock/Charts.vue'
import MvList from 'components/indexBlock/MvList.vue'
export default {
  components:{
    HotMusic,
    NewMusic,
    WonderHot,
    Charts,
    MvList,
    NewDisc
  },
  data(){
    return {
      
    }
  }
}
</script>

<style scoped lang="scss">
.footer{
  height: 500px;
  background-color: #333;
}

</style>