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
export default {
  components: { IndexBlock ,PlayListSwiper},
  data(){
    return {
      wonderhot:[
        [
          {
            "imageUrl": "http://p1.music.126.net/BTUi50pgIRv_-D6duwK4Fg==/109951165669235302.jpg",
            "targetId": 1815389717,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1815389717",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2746977.1851518438.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/od_-JQLICxB_82Lh8O27-w==/109951165670397938.jpg",
            "targetId": 122192507,
            "adid": null,
            "targetType": 10,
            "titleColor": "red",
            "typeTitle": "新碟首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "122192507",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2746984.1851548193.null"
        }
      ]
         ,
      [
        {
            "imageUrl": "http://p1.music.126.net/guZCe3DoWDaKwoAHnPNGPw==/109951165670391106.jpg",
            "targetId": 1815020844,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1815020844",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2727977.1851637601.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/PTQf9BRMZ2IdDXGdYbC_mQ==/109951165670346388.jpg",
            "targetId": 0,
            "adid": null,
            "targetType": 3000,
            "titleColor": "blue",
            "typeTitle": "数字单曲",
            "url": "https://music.163.com/store/newalbum/detail?id=122000560",
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "0",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2742977.1851516262.null"
        }
      ]
        ,
      [
        {
            "imageUrl": "http://p1.music.126.net/sjtjB4SixOwGliRTzEr1dA==/109951165670394929.jpg",
            "targetId": 0,
            "adid": null,
            "targetType": 3000,
            "titleColor": "blue",
            "typeTitle": "活动",
            "url": "https://music.163.com/m/at/warmstory",
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "0",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2723983.1851636605.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/VD4WMep7LQ-70znLDZP0Qw==/109951165670398131.jpg",
            "targetId": 1813330721,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1813330721",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2751972.1851490561.null"
        }
      ]
        ,
      [
        {
            "imageUrl": "http://p1.music.126.net/cd7py947Xw4cTvkvNkjx6w==/109951165670415878.jpg",
            "targetId": 122160101,
            "adid": null,
            "targetType": 10,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "122160101",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2742979.1851489608.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/uEcR-GqlbEprx3S5CHYCdw==/109951165670368331.jpg",
            "targetId": 1813221144,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1813221144",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2726994.1851700807.null"
        }
      ]
        ,
      [
        {
            "imageUrl": "http://p1.music.126.net/CqWCuIppHzThcYpskcEjBQ==/109951165670405680.jpg",
            "targetId": 120613822,
            "adid": null,
            "targetType": 10,
            "titleColor": "red",
            "typeTitle": "独家",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "120613822",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2723985.1851549128.null"
        },
        {
            "imageUrl": "http://p1.music.126.net/eUEHNRp3sLYUnkewZ_9iEg==/109951165670425231.jpg",
            "targetId": 1501715251,
            "adid": null,
            "targetType": 1,
            "titleColor": "red",
            "typeTitle": "新歌首发",
            "url": null,
            "exclusive": false,
            "monitorImpress": null,
            "monitorClick": null,
            "monitorType": null,
            "monitorImpressList": null,
            "monitorClickList": null,
            "monitorBlackList": null,
            "extMonitor": null,
            "extMonitorInfo": null,
            "adSource": null,
            "adLocation": null,
            "adDispatchJson": null,
            "encodeId": "1501715251",
            "program": null,
            "event": null,
            "video": null,
            "song": null,
            "scm": "1.music-homepage.homepage_banner_force.banner.2739980.1851724987.null"
        }
      ]
        
      ]
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