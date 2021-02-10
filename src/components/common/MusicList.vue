<template>
  <div class="music-list">
    <ul class="list-header">
      <li
        v-for="(item, index) in typeTitleArr"
        :key="index"
        :class="titleClass[index]"
      >
        {{ item }}
      </li>
    </ul>
    <ul class="music" :class="{ player: type == '播放' }">
      <li class="music-item" v-for="(item, index) in list" :key="index">
        <div class="song-index" v-if="type === '播放'">
          <span v-show="!playstatus">{{ index + 1 }}</span>
          <i
            class="playing-animate"
            v-show="item.id === currentsongid && playstatus"
          ></i>
        </div>
        <div
          :class="[
            'item',
            type == '单曲' || type == '歌单详情' ? 'four' : 'six',
          ]"
        >
          <div class="title-wrapper">
            <div v-if="showImg" class="item-img">
              <img v-lazy="imgurl(item)" alt="" />
            </div>
            <span>{{ title(item) }}</span>
          </div>
          <div class="menu-list">
            <span 
              class="pause-status"
              @click="selectItem(item, index)"
              :class="{'playing-status':currentsongid===item.id && playstatus}"
            ></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div
          :class="[
            'item',
            type == '单曲' || type == '歌单详情' ? 'two' : 'three',
          ]"
        >
          <span>{{ singer(item) }}</span>
        </div>
        <div
          :class="[
            'item',
            type == '单曲' || type == '歌单详情' ? 'two' : 'one',
          ]"
          v-if="type !== '播放'"
        >
          <span v-if="type == '单曲'">《{{ times(item) }}》</span>
          <span v-else>{{ times(item) }}</span>
        </div>
        <div
          v-if="
            type == '单曲' ||
            type == '播放' ||
            type == '歌单详情' ||
            type == '专辑详情'
          "
          class="item one"
        >
          <span>{{ songTimes(item) }}</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
let moment = require("moment");
import { timeMixin } from "../../utils/mixin";
import { tranNumber } from "../../utils/utils";
export default {
  mixins: [timeMixin],
  data() {
    return {
      titleSong: Object.freeze(["歌曲", "歌手", "专辑", "时长"]), //单曲
      titleAlbum: Object.freeze(["专辑", "歌手", "发行时间"]), //专辑
      titlePlaylist: Object.freeze(["歌单", "创建人", "收听"]),
      titlePlay: Object.freeze(["歌曲", "歌手", "时长"]),
      classFour: Object.freeze(["four", "two", "two", "one"]),
      classThree: Object.freeze(["six", "three", "one"]),
    };
  },
  props: {
    type: String,
    list: Array,
    currentsongid: Number,
    playstatus: Boolean,
  },
  computed: {
    typeTitleArr() {
      switch (this.type) {
        case "歌单详情":
        case "单曲":
          return this.titleSong;
        case "专辑":
          return this.titleAlbum;
        case "歌单":
          return this.titlePlaylist;
        case "播放":
        case "专辑详情":
          return this.titlePlay;
        default:
          break;
      }
      return "";
    },
    titleClass() {
      switch (this.type) {
        case "歌单详情":
        case "单曲":
          return this.classFour;
        default:
          return this.classThree;
      }
    },
    title(item) {
      return function (item) {
        const name = item && item.name;
        return name;
      };
    },
    singer(item) {
      return function (item) {
        if (this.type == "单曲" || this.type == "专辑") {
          let singers = "";
          item.artists &&
            item.artists.forEach((item2) => {
              singers += item2.name + " / ";
            });
          return singers.slice(0, -2);
        } else if (this.type == "歌单") {
          const name = item.creator && item.creator.nickname;
          return name;
        } else if (
          this.type == "播放" ||
          this.type == "歌单详情" ||
          this.type == "专辑详情"
        ) {
          let singers = "";
          item.ar &&
            item.ar.forEach((item2) => {
              singers += item2.name + " / ";
            });
          return singers.slice(0, -2);
        }
      };
    },
    times(item) {
      return function (item) {
        if (this.type == "单曲") {
          return item.album.name;
        } else if (this.type == "专辑") {
          return moment(item.publishTime).format("YYYY-MM-DD");
        } else if (this.type == "歌单") {
          return tranNumber(item.playCount, 2);
        } else if (this.type == "歌单详情") {
          return item.al.name;
        }
      };
    },
    songTimes(item) {
      return function (item) {
        if (this.type == "单曲") {
          return this.formatPlayTime(item.duration);
        } else if (
          this.type == "播放" ||
          this.type == "歌单详情" ||
          this.type == "专辑详情"
        ) {
          // console.log(item.dt);
          return this.formatPlayTime(item.dt);
        }
      };
    },
    showImg() {
      return this.type == "专辑" || this.type == "歌单";
    },
    imgurl(item) {
      return function (item) {
        if (this.type == "专辑") {
          return item.picUrl;
        } else {
          return item.coverImgUrl;
        }
      };
    },
  },
  methods: {
    //点击列表的播放按钮
    selectItem(item, index) {
      this.$emit("select", item, index);
    },
  },
};
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.music-list {
  .list-header {
    @include centers;
    background-color: rgba(0, 0, 0, 0.01);
    li {
      height: 50px;
      padding-left: 51px;
      line-height: 50px;
      font-size: 14px;
      color: #999;
    }
  }
  .music {
    .music-item {
      padding: 10px 0;
      @include centers;
      &:nth-of-type(even) {
        background-color: rgba(0, 0, 0, 0.01);
      }
      &:hover {
        .item {
          .menu-list {
            opacity: 1;
          }
        }
      }
      .item-img {
        height: 60px;
        width: 60px;
        margin-right: 15px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .song-index {
        width: 36px;
        height: 36px;
        color: rgba(225, 225, 225, 0.8);
        @include centers;
        .playing-animate {
          width: 10px;
          height: 10px;
          background: url("../../assets/image/wave.gif");
        }
      }
      .item {
        height: 60px;
        padding-left: 15px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        .title-wrapper {
          @include left;
        }
        .menu-list {
          height: 40px;
          @include centers;
          opacity: 0;
          span {
            display: block;
            width: 40px;
            height: 100%;
            margin-right: 10px;
            background: url("../../assets/image/icon_list_menu.png");
            background-size: 200px 320px;
            background-repeat: no-repeat;
            &:nth-child(1) {
              background-position-y: 0;
              &:hover {
                background-position-x: -40px;
              }
            }
            &:nth-child(2) {
              background-position-y: -40px;
              &:hover {
                background-position-x: -40px;
              }
            }
            &:nth-child(3) {
              background-position-y: -80px;
              &:hover {
                background-position-x: -40px;
              }
            }
            &:nth-child(4) {
              background-position-y: -120px;
              &:hover {
                background-position-x: -40px;
              }
            }
          }
        }
      }
      span {
        font-size: 14px;
        overflow: hidden;
        text-overflow: ellipsis;
        line-height: 22px;
        &:hover {
          color: #31c27c;
          cursor: pointer;
        }
      }
    }
    &.player {
      .music-item {
        .item {
          .menu-list {
            .pause-status.playing-status{
              background-position: -120px -200px;
            }
            span:hover {
              background-position-x: -120px;
            }
          }
          span {
            color: rgba(225, 225, 225, 0.8);
            &:hover {
              color: #fff;
            }
          }
        }
      }
    }
  }
}

.six {
  flex: 6;
}
.four {
  flex: 4;
}
.three {
  flex: 3;
}
.two {
  flex: 2;
}
.one {
  flex: 1;
}
</style>