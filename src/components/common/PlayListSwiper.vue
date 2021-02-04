<template>
  <swiper :options="swiperOption" ref="mySwiper">
    <!-- slides -->
    <swiper-slide v-for="(itemone, slideindex) in listinfo" :key="slideindex">
      <ul class="one">
        <play-list-item
          v-for="(item, index) in itemone"
          :items="item"
          :key="index"
          :config="iteminfo"
        ></play-list-item>
      </ul>
    </swiper-slide>
    <!-- Optional controls -->
    <div class="swiper-pagination" slot="pagination"></div>
  </swiper>
</template>

<script>
/*传入歌单数据数组,每个对象数据就是一个li,再传入每页展示li的个数,如果是5就是推荐,此时
总数 / 5 得到有几页,推荐的轮播图是一个ul里面一排li

如果不是5就展示下面的,可能是9或者10 , 9就是新歌轮播图根据总数得到多少页
*/
// 同样引入样式文件

import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
// import style (<= Swiper 5.x)
import 'swiper/css/swiper.css';
import PlayListItem from "./PlayListItem";
export default {
  components: {
    PlayListItem,
    Swiper,
    SwiperSlide,
  },
  props:{
    iteminfo:{
      type:Object
    },
    listinfo:Array
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.$swiper
    }
	},
  data() {
    return {
      
      swiperOption: {  
          notNextTick: true,
          //循环
          loop:true,
          //设定初始化时slide的索引
          initialSlide:0,
          //自动播放
          autoplay:false,
          // 设置轮播
          effect : 'slide',
          //滑动速度
          speed:800,
          //滑动方向
          direction : 'horizontal',
          //分页器设置         
          pagination: {
              el: '.swiper-pagination',
              clickable :true
          }
      }
    }
  },
  methods: {
    listPre(){
      this.swiper.slidePrev()
    },
    listNext(){
      this.swiper.slideNext()
    }
    
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.one {
  width: 100%;
  height: 100%; //li个数乘以每个宽度 244 * 15
  display: flex;
  flex-wrap: wrap;
}
.swiper-container{
  padding-bottom: 58px;
}
.swiper-container-horizontal>.swiper-pagination-bullets{
  z-index: 30;
  bottom: 0;
  height: 38px;
}

</style>