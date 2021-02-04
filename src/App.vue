<template>
  <div id="app">
    <router-view/>
      <play-music></play-music>
  </div>
</template>

<script>
import PlayMusic from './views/playmusic/PlayMusic'
export default {
  components:{PlayMusic}
}
</script>

<style lang="scss" scoped>
@import "assets/css/global.scss";
  #app{
    width: 100%;
    height: 100%;
    overflow-x: hidden;
  }
  
</style>
