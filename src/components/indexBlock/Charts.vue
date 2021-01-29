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
export default {
  components: {
    IndexBlock,
    ChartsItem,
  },
  data() {
    return {
      charts: Object.freeze([
        {
          subscribers: [],
          subscribed: null,
          creator: null,
          artists: null,
          tracks: [
            {
              first: "Celebrity",
              second: "IU",
            },
            {
              first: "狐狸的童话",
              second: "Santa_SA/马也_Crabbit",
            },
            {
              first: "风儿吹",
              second: "要不要买菜",
            },
          ],
          updateFrequency: "更新84首",
          backgroundCoverId: 0,
          backgroundCoverUrl: null,
          titleImage: 0,
          titleImageUrl: null,
          englishTitle: null,
          opRecommend: false,
          recommendInfo: null,
          trackNumberUpdateTime: 1611792489431,
          cloudTrackCount: 0,
          subscribedCount: 3627619,
          userId: 1,
          trackCount: 100,
          coverImgUrl:
            "https://p1.music.126.net/DrRIg6CrgDfVLEph9SNh7w==/18696095720518497.jpg",
          specialType: 10,
          coverImgId: 18696095720518496,
          totalDuration: 0,
          newImported: false,
          anonimous: false,
          updateTime: 1611792489723,
          privacy: 0,
          trackUpdateTime: 1611819156477,
          createTime: 1404115136883,
          highQuality: false,
          commentThreadId: "A_PL_0_19723756",
          playCount: 3947932672,
          adType: 0,
          description: "云音乐中每天热度上升最快的100首单曲，每日更新。",
          tags: [],
          ordered: true,
          status: 0,
          name: "飙升榜",
          id: 19723756,
          coverImgId_str: "18696095720518497",
          ToplistType: "S",
        },
        {
          subscribers: [],
          subscribed: null,
          creator: null,
          artists: null,
          tracks: [
            {
              first: "错位时空",
              second: "艾辰",
            },
            {
              first: "星辰大海",
              second: "黄霄雲",
            },
            {
              first: "Celebrity",
              second: "IU",
            },
          ],
          updateFrequency: "刚刚更新",
          backgroundCoverId: 0,
          backgroundCoverUrl: null,
          titleImage: 0,
          titleImageUrl: null,
          englishTitle: null,
          opRecommend: false,
          recommendInfo: null,
          trackNumberUpdateTime: 1611793792774,
          cloudTrackCount: 0,
          subscribedCount: 2507022,
          userId: 1,
          trackCount: 100,
          coverImgUrl:
            "https://p1.music.126.net/N2HO5xfYEqyQ8q6oxCw8IQ==/18713687906568048.jpg",
          specialType: 10,
          coverImgId: 18713687906568050,
          totalDuration: 0,
          newImported: false,
          anonimous: false,
          updateTime: 1611793792870,
          privacy: 0,
          trackUpdateTime: 1611793792874,
          createTime: 1378721398225,
          highQuality: false,
          commentThreadId: "A_PL_0_3779629",
          playCount: 2112695808,
          adType: 0,
          description:
            "云音乐新歌榜：云音乐用户一周内收听所有新歌（一月内最新发行） 官方TOP排行榜，每天更新。",
          tags: [],
          ordered: true,
          status: 0,
          name: "新歌榜",
          id: 3779629,
          coverImgId_str: "18713687906568048",
          ToplistType: "N",
        },
        {
          subscribers: [],
          subscribed: null,
          creator: null,
          artists: null,
          tracks: [
            {
              first: "逛",
              second: "张含韵",
            },
            {
              first: "Dear You",
              second: "昨夜派对（L.N Party）",
            },
            {
              first: "幽默",
              second: "孟凡明",
            },
          ],
          updateFrequency: "每周四更新",
          backgroundCoverId: 0,
          backgroundCoverUrl: null,
          titleImage: 0,
          titleImageUrl: null,
          englishTitle: null,
          opRecommend: false,
          recommendInfo: null,
          trackNumberUpdateTime: 1611249697077,
          cloudTrackCount: 0,
          subscribedCount: 663014,
          userId: 201586,
          trackCount: 100,
          coverImgUrl:
            "https://p1.music.126.net/sBzD11nforcuh1jdLSgX7g==/18740076185638788.jpg",
          specialType: 10,
          coverImgId: 18740076185638788,
          totalDuration: 0,
          newImported: false,
          anonimous: false,
          updateTime: 1611249709713,
          privacy: 0,
          trackUpdateTime: 1611720691421,
          createTime: 1374732325894,
          highQuality: false,
          commentThreadId: "A_PL_0_2884035",
          playCount: 469683936,
          adType: 0,
          description:
            "云音乐独立原创音乐人作品官方榜单，以推荐优秀原创作品为目的。每周四网易云音乐首发。申请网易音乐人：http://music.163.com/nmusician/",
          tags: [],
          ordered: true,
          status: 0,
          name: "原创榜",
          id: 2884035,
          coverImgId_str: "18740076185638788",
          ToplistType: "O",
        },
        {
          subscribers: [],
          subscribed: null,
          creator: null,
          artists: null,
          tracks: [
            {
              first: "星辰大海",
              second: "黄霄雲",
            },
            {
              first: "Celebrity",
              second: "IU",
            },
            {
              first: "四季予你",
              second: "程响",
            },
          ],
          updateFrequency: "刚刚更新",
          backgroundCoverId: 0,
          backgroundCoverUrl: null,
          titleImage: 0,
          titleImageUrl: null,
          englishTitle: null,
          opRecommend: false,
          recommendInfo: null,
          trackNumberUpdateTime: 1611816215018,
          cloudTrackCount: 0,
          subscribedCount: 10802279,
          userId: 1,
          trackCount: 200,
          coverImgUrl:
            "https://p1.music.126.net/GhhuF6Ep5Tq9IEvLsyCN7w==/18708190348409091.jpg",
          specialType: 10,
          coverImgId: 18708190348409092,
          totalDuration: 0,
          newImported: false,
          anonimous: false,
          updateTime: 1611816215177,
          privacy: 0,
          trackUpdateTime: 1611816215127,
          createTime: 1378721406014,
          highQuality: false,
          commentThreadId: "A_PL_0_3778678",
          playCount: 8317404160,
          adType: 0,
          description:
            "云音乐热歌榜：云音乐用户一周内收听所有线上歌曲 官方TOP排行榜，每周四更新。",
          tags: [],
          ordered: true,
          status: 0,
          name: "热歌榜",
          id: 3778678,
          coverImgId_str: "18708190348409091",
          ToplistType: "H",
        },
      ]),
      positionList:Object.freeze(['0%','-25%','-50%','-75%'])
    }
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