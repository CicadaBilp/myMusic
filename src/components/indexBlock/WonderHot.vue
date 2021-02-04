<template>
  <div>
    <index-block title="精彩推荐">
      <div class="playlist-wrapper">
        <play-list-swiper 
          :iteminfo="iteminfo" 
          :listinfo="wonderhot"
        />
      </div>
    </index-block>
  </div>
</template>

<script>
import IndexBlock from './IndexBlock.vue'
import PlayListSwiper from '../common/PlayListSwiper'
import {API} from '@/request/api.js'
import {arrChange} from '@/utils/utils.js'

export default {
  components: { IndexBlock ,PlayListSwiper},
  data(){
    return {
      wonderhot:[]
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:590,
        picheight:236,
        percent:'50%',
        type:'wonderHot'
      }
    }
  },
  methods:{
    //获取精彩推荐数据(banner)
    getbanner(){
      API.getWonderHot()
        .then((res) => {
          const list = arrChange((res.data.banners),2)
          this.wonderhot = Object.freeze(list)
        })
    }
  },
  created(){
    this.getbanner()
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.playlist-wrapper{
  width: 1220px;
  margin-bottom: 20px;
  margin-right: -20px;
  position: relative;
}
</style>