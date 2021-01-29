<template>
    <index-block title="排行榜" :btntop="56">
      <div class="playlist-wrapper">
        <charts-item 
          v-for="(item, index) in charts" 
          :key="index"
          :items="item"
          :position=positionList[index]
        />
      </div>
    </index-block>
</template>

<script>
import IndexBlock from "./IndexBlock";
import ChartsItem from "../common/ChartsItem";
import {API} from '@/request/api.js'

export default {
  components: {
    IndexBlock,
    ChartsItem,
  },
  data() {
    return {
      charts: [],
      positionList:Object.freeze(['0%','-25%','-50%','-75%'])
    }
  },
  methods:{
    getCharts(){
      API.getTopList()
        .then((res) => {
          const list = res.data.list.slice(0,4)
          this.charts = Object.freeze(list)
        })
    }
  },
  mounted(){
    this.getCharts()
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.playlist-wrapper {
  width: 100%;
  position: relative;
  display: flex;
}
</style>