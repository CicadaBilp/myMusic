<template>
    <index-block :navlist="discNavBar" title="新碟首发" @change="newDiscChange">
      <div class="playlist-wrapper">
        <play-list-swiper
          :listinfo="newdisc" 
          :iteminfo="iteminfo"
          @itemselect="itemSelect2"
        />
      </div>
    </index-block>
</template>

<script>
import IndexBlock from './IndexBlock.vue'
import PlayListSwiper from '../common/PlayListSwiper'
import {API} from '@/request/api.js'
import {arrChange} from '@/utils/utils.js'
import {newDiscType} from '@/utils'

export default {
  components: { IndexBlock,PlayListSwiper },
  data(){
    return {
      newdisc:[],
      discNavBar:['华语','欧美','韩国','日本']
    }
  },
  computed:{
    iteminfo(){
      return {
        picwidth:224,
        picheight:224,
        percent:'20%',
        type:'newDisc'
      }
    }
  },
  methods:{
    //获取新碟
    getNewDiscs(area){
        API.getNewDisc(area)
            .then((res) => {
                const list = arrChange((res.data.albums),10)
                this.newdisc = Object.freeze(list)
            })
    },
    newDiscChange(name){
        const nameType = newDiscType(name)
        this.getNewDiscs(nameType)
    },
    itemSelect2(id){
      this.$router.push({
        path: '/home/albumdetail',
        query: { id}
      }).catch(err => { console.log(err) })
    }
  },
  mounted(){
      this.getNewDiscs('ZH')
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