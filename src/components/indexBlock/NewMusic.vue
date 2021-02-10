<template>
    <index-block title="新歌首发" :navlist="newNavbar" @change="newMusicChange">
      <div class="newmusic-wrapper">
        <play-list-swiper 
          :iteminfo="iteminfo" 
          :listinfo="newmusic"
          @itemselect="itemSelect"
        />
      </div>
    </index-block>
</template>

<script>
import IndexBlock from './IndexBlock.vue'
import PlayListSwiper from '../common/PlayListSwiper'
import {API} from '@/request/api.js'
import {arrChange} from '@/utils/utils.js'
import {newSongType} from '@/utils'
import {playSong} from '../../utils/mixin'

export default {
  mixins:[playSong],
  components: { IndexBlock ,PlayListSwiper},
  data(){
    return {
      newNavbar:['华语','欧美','韩国','日本'],
      newmusic:[]  
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:99,
        picheight:99,
        percent:'33.333%',
        type:'newSong'
      }
    },
    
  },
  methods:{
      //获取新歌速递的请求方法(传入地区类型即可)
    getNewSongs(type){
        API.getNewSong(type)
        .then((res) => {
            const list = arrChange((res.data.data.slice(0,45)),9)
            this.newmusic = Object.freeze(list)
        })
    },
    newMusicChange(name){
        const nameType = newSongType(name)
        this.getNewSongs(nameType)
    },
    //点击新歌首发中的歌曲,跳转播放
    itemSelect(id){
      API.getSongDetail(id).then((res) => {
        this.select(res.data.songs[0])
      })
    }
  },
  mounted(){
      this.getNewSongs(7)
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.playlist-wrapper{
  width: 1230px;
  margin-bottom: 20px;
  // background-color: blueviolet;
  margin-right: -30px;
  position: relative;
}

</style>