<template>
  <div class="box-wrapper">
    <div class="search-box">
      <input
        type="text"
        class="input"
        placeholder="搜索音乐,MV,歌单,用户"
        v-model.trim="query"
        @focus="showlist()"
        @blur="hidelist()"
        @input="handlesearch"
        @keyup.enter="sendSearch"
      />
      <div class="search-icon" v-show="query"><i @click="sendSearch"></i></div>
    </div>
    <div v-show="showList" @mousedown ="preventBlur($event)">
      <div class="hot-list-box" v-show="showHot">
        <scroll h="100%">
          <div class="hot-search-wrapper">
            <div class="title1">搜索历史</div>
            <div class="history-wrapper">
              <div class="history-btn" 
                   v-for="(item,index) in historySearch"
                   :key="index"
                   @click="clickHistory(item)"
              >{{item}}</div>
            </div>
            <div class="title2">热搜榜</div>
            <ul>
              <li class="hot-search-item" 
                  v-for="(item, index) in hotList"
                  @click="selectHot(item)"
              >
                <span class="item-index" :class="{ active: index < 3 }">{{
                  index + 1
                }}</span>
                <div class="hot-music-info">
                  <div class="music-name">
                    {{ item.searchWord }} {{ item.score }}
                    <img :src="item.iconUrl" alt="" v-if="item.iconUrl" />
                  </div>
                  <div class="music-des">{{ item.content }}</div>
                </div>
              </li>
            </ul>
          </div>
        </scroll>
      </div>
      <div class="my-search-wrapper" v-show="!showHot">
        <div class="songs" v-if="mySearch && mySearch.songs">
          <div class="title3">单曲</div>
            <ul>
                <li class="my-search-item" 
                  v-for="(item,index) in mySearch.songs"
                  :key="index"
              >
                  {{item.name}} - {{allsingers(item)}}
              </li>
            </ul>
        </div>
        <div class="singers" v-if="mySearch && mySearch.artists">
          <div class="title3">歌手</div>
            <ul>
                <li class="my-search-item" 
                  v-for="(item,index) in mySearch.artists"
                  :key="index"
              >
                  {{item.name}}
              </li>
            </ul>
        </div>
        <div class="albums" v-if="mySearch && mySearch.albums"> 
          <div class="title3">专辑</div>
            <ul>
                <li class="my-search-item" 
                  v-for="(item,index) in mySearch.albums"
                  :key="index"
              >
                  {{item.name}} - {{item.artist.name}}
              </li>
            </ul>
        </div>
        
        <div class="playlist" v-if="mySearch && mySearch.playlists">
          <div class="title3">歌单</div>
            <ul>
                <li class="my-search-item" 
                  v-for="(item,index) in mySearch.playlists"
                  :key="index"
              >
                  {{item.name}}
              </li>
            </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Scroll from "../common/Scroll";
import { API } from "../../request/api";
import { mapActions,mapGetters } from 'vuex';
export default {
  components: { Scroll },
  data() {
    return {
      query: "",
      showHot: true,
      showList: false,
      hotList: [],
      mySearch: null,
    }
  },
  computed:{
    ...mapGetters(['historySearch'])
  },
  methods: {
    ...mapActions(['saveHistorySearch']),
    showlist() {
      this.showList = true;
    },
    hidelist() {
      this.showList = false;
    },
    allsingers(item){
      let names = ''
      item.artists.forEach((item) => {
        names += item.name + ' / '
      })
      return names.slice(0,-3)
    },
    //input值改变请求推荐搜索
    handlesearch(){
      // console.log('222');
      if(this.timer){
        clearTimeout(this.timer)
      }
      if(this.query.length<=0) return 
      this.timer = setTimeout(() => {
        API.getSearchSuggest(this.query).then((res) => {
          this.mySearch = res.data.result
        });
      },500)
       
    },
    //回车发送搜索请求
    sendSearch(){
      this.$router.push({
          path: '/home/searchlist',
          query: {
            keywords:this.query
          }
      })
      this.saveHistorySearch(this.query)
    },
    //点击热搜列表搜索
    selectHot(item){
      this.query = item.searchWord
      this.sendSearch()
      this.hidelist()

    },
    preventBlur(event){
      event.preventDefault();
    },
    clickHistory(item){
      this.query = item
      this.sendSearch()
    }
    // handleKeywords(result){
    //   const arr = result['order']
    //   arr.forEach((arritem) => {
    //     result[arritem]
    //   })
    // }
  },
  watch: {
    query(newquery, oldquery) {
      if (newquery.trim().length <= 0) {
        this.showHot = true;
      } else {
        this.showHot = false;
      }
    }
  },
  mounted() {
    API.getHotSearchList().then((res) => {
      this.hotList = res.data.data;
    });
  },
};
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.box-wrapper {
  height: 100%;
  .search-box {
    height: 100%;
    width: 100%;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 20px;
    padding: 0 33px 0 11px;
    position: relative;
    input {
      width: 100%;
      border: none;
      padding: 0 0;
      outline: none;
      height: 100%;
      transition: all 0.5s;
    }
    .search-icon{
      height: 33px;
      width: 33px;
      position: absolute;
      right: 0;
      top: 0;
      @include centers;
      i{
        width: 20px;
        height: 20px;
        background: url('../../assets/image/icon_sprite.png');
        background-size: 200px 340px;
        background-position: 0 -38px;
      }
    }
  }
  .hot-list-box {
    width: 140%;
    height: 500px;
    margin-left: -20px;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
    .hot-search-wrapper {
      padding: 20px;
      .title1 {
        margin-bottom: 5px;
        font-size: 15px;
        color: rgb(77, 60, 60);
      }
      .history-wrapper {
        display: flex;
        margin-bottom: 20px;
        flex-wrap: wrap;
        .history-btn {
          font-size: 13px;
          padding: 5px 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          color: rgb(77, 60, 60);
          margin: 5px;
          
          &:hover{
            background-color:#eee ;
            cursor: pointer;
          }
        }
      }
      .title2 {
        margin: 10px;
        font-size: 15px;
        color: rgb(77, 60, 60);
      }
      .hot-search-item {
        padding-left: 40px;
        margin: 15px 0;
        position: relative;
        z-index: 20;
        &:hover{
          cursor: pointer;
        }
        .item-index {
          position: absolute;
          color: #ccc;
          left: 0;
          top: 0;
          &.active {
            color: red;
          }
        }
        .hot-music-info {
          .music-name {
            margin-bottom: 8px;
            font-size: 14px;
            color: #999;
            img {
              width: 16px;
            }
          }
          .music-des {
            font-size: 12px;
            color: #ccc;
            @include ellipsis;
          }
        }
      }
    }
  }
  .my-search-wrapper {
    width: 140%;
    padding: 30px 0;
    border: 1px solid #ccc;
    background-color: #fff;
    border-radius: 10px;
    margin-left: -20px;

    .title3 {
      line-height: 32px;
      padding-left: 20px;
      font-size: 13px;
      background-color: #eee;
    }
    .my-search-item{
      background-color: #fff;
      font-size: 13px;
      padding:0 10px 0 35px;
      height: 32px;
      line-height: 32px;
      overflow: hidden;
      text-overflow: ellipsis;
    }
    
  }
}
</style>