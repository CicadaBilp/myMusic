<template>
  <div>
    <div class="musichall-nav-bar">
      <ul>
        <li v-for="(item,index) in musichall_list" :key="index">{{item.name}}</li>
      </ul>
    </div>
      <keep-alive include="index">
        <router-view />
      </keep-alive>
  </div>
</template>

<script>

export default {
  data(){
    return {
      musichall_list:[
        { name:'首页', path:'/home/musichall/index' },
        { name:'歌手', path:'/home/musichall/singer' },
        { name:'新碟', path:'/home/musichall/newdisc' },
        { name:'排行榜', path:'/home/musichall/ranks' },
        { name:'分类歌单', path:'/home/musichall/playlist' },
        { name:'电台', path:'/home/musichall/station' },
        { name:'MV', path:'/home/musichall/mv' },
        { name:'数字专辑', path:'/home/musichall/album' },
        { name:'票务', path:'/home/musichall/ticketing' },
      ]
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.musichall-nav-bar{
  max-width: 1200px;
  min-width: 994px;
  height: 52px;
  box-sizing: border-box;
  padding-left: 230px;
  margin: 0 auto;
  // background-color: aqua;
  ul{
    height: 52px;
    li{
      float: left;
      line-height: 52px;
      text-align: center;
      margin-right: 47px;
      font-size: 15px;
      position: relative;
      &:hover{
        color: #31c27c;
        cursor: pointer;
      }
    }
  }
}


</style>
