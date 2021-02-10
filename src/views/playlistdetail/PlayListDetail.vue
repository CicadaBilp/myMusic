<template>
  <div class="playlist-detail-wrapper">
    <div class="playlist-detail-inner" v-if="playlistDetail">
      <div class="header">
        <div class="image"><img :src="playlistDetail.coverImgUrl" alt=""></div>
        <div class="playlist-info">
          <h1>{{playlistDetail.name}}</h1>
          <div class="base-info">
            <span>作者: {{playlistDetail.creator.nickname}}</span>
            <span>标签: {{tags}}</span>
            <span>播放量: {{playlistDetail.playCount}}</span>
            <span>已订阅 {{playlistDetail.subscribedCount}}</span>
          </div>
          <div class="info-btns">
            <option-btn 
              :xposition="-57" 
              :yposition="-220" 
              btnname="播放全部"
              @clickbtn="handleClickBtn"
            />
  
            <option-btn :xposition="-60" :yposition="0" btnname="收藏"/>
            <option-btn :xposition="-140" :yposition="-120" btnname="评论"/>
            <option-btn :xposition="-20" :yposition="-80" btnname="更多"/>
            </div>
        </div>
      </div>
      <div class="main">
        <scroll h="656px" class="detail-list-wrapper">
          <music-list :list="playlistDetail.tracks" type="歌单详情" @select="select"></music-list>
        </scroll>
        
        <div class="playlist-others">
          <div class="playlist-introduction">
            <div class="title1">简介</div>
            <p>{{playlistDetail.description}}</p>
          </div>
          <div class="similar-list" v-if="similarList">
            <div class="title1">相似歌单</div>
            <ul class="similar-wrapper">
              <li class="similar-item" v-for="(item,index) in similarList" :key="index">
                <div class="item-main">
                  <div class="item-image"><img :src="item.coverImgUrl" alt=""></div>
                  <div class="list-name">{{item.name}}</div>
                  <div class="nickname">{{item.creator.nickname}}</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import OptionBtn from '../../components/common/OptionBtn'
import MusicList from '../../components/common/MusicList'
import Scroll from '../../components/common/Scroll'
import {API} from '../../request/api'
import {playSong} from '../../utils/mixin'


export default {
  mixins:[playSong],
  components:{  OptionBtn,MusicList,Scroll  },
  data(){
    return {
      playlistDetail:null,
      similarList:null
    }
  },
  computed:{
    tags(){
      let tag = ''
      this.playlistDetail.tags.forEach((item) => {
        tag += item + ' '
      })
      return tag
    }
  },
  methods:{
    handleClickBtn(name){
      if(name==='播放全部'){
        this.selectPlay({
          list:this.playlistDetail.tracks
        })
      }
    }
  },
  mounted(){
    const id = this.$route.query.id
    API.getPlaylistDetail(id).then((res) => {
      this.playlistDetail = res.data.playlist
      // console.log(this.playlistDetail);
    })
    API.getSimilarPlaylist(id).then((ret) => {
      // console.log(ret);
      this.similarList = ret.data.playlists
    })
  }
}
</script>

<style scopde lang="scss">
@import "assets/css/global.scss";

.playlist-detail-wrapper{
  background: url('../../assets/image/bg_detail.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .playlist-detail-inner{
    max-width: 1200px;
    margin: 0 auto;
    .header{
      height: 250px;
      margin: 40px 0 35px 0;
      @include left;
      .image{
        height:250px;
        width:250px;
        margin-right: 55px;
        // background-color: aquamarine;
        img{
          width:100%;
          height: 100%;
        }
      }
      .playlist-info{
        h1{
          font-size: 31px;
          line-height: 50px;
          font-weight: 400;
          white-space: nowrap;
        }
        .base-info{
          display: flex;
          flex-direction: column;
          span{
            height: 27px;
            line-height: 27px;
            font-size: 14px;
          }
        }
        .info-btns{
          display: flex;
          margin-top: 20px;
        }
      }
    }
    .main{
      display: flex;
      .detail-list-wrapper{
        flex: 1;
      }
      .playlist-others{
        width: 290px;
        margin-left: 60px;
        .title1{
            font-size: 20px;
            font-weight: 400;
            line-height: 46px;
          }
        .playlist-introduction{
          margin-bottom: 30px;
          p{
            font-size: 14px;
            line-height: 22px;
          }
        }
          .similar-list{
            .similar-wrapper{
              width: 312px;
              display: flex;
              flex-wrap: wrap;
                .similar-item{
                  width:104px;
                  .item-main{
                    margin:0 20px 15px 0;                   
                  }
                .item-image{
                  width: 84px;
                  height: 84px;
                  margin-bottom: 3px;
                  img{
                    width: 100%;
                    height: 100%;
                  }
                }
                .list-name{
                  width: 100%;
                  font-size: 14px;
                  line-height: 21px;
                  @include ellipsis2(2);
                }
                .nickname{
                  font-size: 14px;
                  line-height: 1.5;
                  color: #999;
                }
              }
            }
            
          }
      }
    }
  }
}

</style>