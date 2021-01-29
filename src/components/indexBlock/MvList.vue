<template>
    <index-block title="MV" :navlist="arealist" @change="mvChange">
      <div class="playlist-wrapper">
        <play-list-swiper
          :listinfo="mvlist" :iteminfo="iteminfo"
        />
      </div>
    </index-block>
</template>

<script>
import IndexBlock from "./IndexBlock.vue";
import PlayListSwiper from '../common/PlayListSwiper'
import {API} from '@/request/api.js'
import {arrChange} from '@/utils'

export default {
  components: { IndexBlock,PlayListSwiper },
  data() {
    return {
      mvlist: [],
      arealist:['内地','港台','欧美','韩国','日本']
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:224,
        picheight:126,
        percent:'20%',
        type:'mv'
      }
    }
  },
  methods:{
    getMv(area){
      API.getMvList(area)
        .then((res) => {
          const list = arrChange((res.data.data),10)
          this.mvlist = Object.freeze(list)
        })
    },
    mvChange(name){
      this.getMv(name)
    }
  },
  mounted(){
    this.getMv('内地')
  }
};
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