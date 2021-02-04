<template>
    <index-block title="歌单推荐" :navlist="hotNavBar" @change="hotMusicChange">
      <div class="playlist-wrapper">
        <play-list-swiper :listinfo="result" :iteminfo="iteminfo"></play-list-swiper>
      </div>
    </index-block>
</template>

<script>
import IndexBlock from './IndexBlock'
import PlayListSwiper from '../common/PlayListSwiper'
import {API} from '@/request/api.js'
import {arrChange} from '@/utils/utils.js'
export default {
  components: { IndexBlock ,PlayListSwiper},
  data(){
    return{
      hotNavBar:['华语','清新','经典','网络歌曲','欧美','民谣'],
      result: []
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:224,
        picheight:224,
        percent:'20%',
        type:'hotMusic'
      }
    }
  },
  methods:{
    //歌单推荐部分的请求方法(传入标签类型即可)
    getplayList(cat){
      API.playlistRecommend(cat)
      .then((res) => {
        const list = arrChange(res.data.playlists,5)
        this.result = Object.freeze(list)
      })
    },
    hotMusicChange(name){
      this.getplayList(name)
    }
  },
  mounted(){
    this.getplayList('华语')
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.playlist-wrapper{
  width: 1220px;
  margin-bottom: 20px;
  // background-color: blueviolet;
  margin-right: -20px;
  position: relative;
  // overflow-x: hidden;
  // overflow-y: visible;
}

</style>