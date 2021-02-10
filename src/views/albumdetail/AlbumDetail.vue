<template>
    <div class="album-detail-wrapper">
    <div class="album-detail-inner" v-if="albumInfo">
      <div class="header">
        <div class="image"><img :src="albumInfo.picUrl" alt=""></div>
        <div class="albumlist-info">
          <h1>{{albumInfo.name}}</h1>
          <h2>作者: {{arnames}}</h2>
          <div class="base-info">
            <span>歌曲: {{albumInfo.size}}首</span>
            <span v-if="albumInfo.alias.length>0">标签: {{albumInfo.alias[0]}}</span>
            <span>发行时间: {{albumInfo.publishTime | dateformat}}</span>
            <span>唱片公司: {{albumInfo.company}}</span>
            <span>类型: {{albumInfo.type}}</span>
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
        <scroll h="656px" class="album-list-wrapper">
          <music-list :list="albumlists" type="专辑详情" @select="select"></music-list>
        </scroll>
        
        <div class="albumlist-others">
          <div class="album-introduction">
            <div class="title1">简介</div>
            <p>{{albumInfo.description}}</p>
          </div>
          <!-- <div class="similar-album-list" v-if="">
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
          </div> -->
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
import {playSong } from '../../utils/mixin'

export default {
  mixins:[playSong],
  components:{
    OptionBtn,MusicList,Scroll 
  },
  data(){
    return {
      albumInfo:null,  //专辑信息
      albumlists:null  //专辑中歌曲列表
    }
  },
  computed:{
    arnames(){
      let singers = ''
      this.albumInfo.artists && this.albumInfo.artists.forEach((item2) => {
        singers += item2.name + ' / '
      })
      return singers.slice(0,-2);
    }
  },
  methods:{
    //点击上方按钮处理
    handleClickBtn(name){
      if(name==='播放全部'){
        this.selectPlay({
          list:this.albumlists
        })
      }

    }
  },
  mounted(){
    const id = this.$route.query.id
    API.getAlbumDetail(id).then((res) => {
      this.albumInfo = res.data.album
      this.albumlists = res.data.songs
    })
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.album-detail-wrapper{
  background: url('../../assets/image/bg_detail.jpg');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  overflow: hidden;
  .album-detail-inner{
    max-width: 1200px;
    margin: 0 auto;
    .header{
      height: 250px;
      margin: 40px 0 35px 0;
      @include left;
      .image{
        height:250px;
        width:250px;
        margin-right: 100px;
        position: relative;
        &::after{
          content: "";
          position: absolute;
          left: 0;
          top: 0;
          width: 300px;
          height: 266px;
          background: url('../../assets/image/album_cover.png');
          background-repeat: no-repeat;
          background-size: 100% 100%;
        }
        // background-color: aquamarine;
        img{
          width:100%;
          height: 100%;
        }
      }
      .albumlist-info{
        h1{
          font-size: 31px;
          line-height: 50px;
          font-weight: 400;
          white-space: nowrap;
        }
        h2{
          line-height: 30px;
          font-size: 14px;
          color:#666;
        }
        .base-info{
          display: flex;
          flex-wrap: wrap;
          span{
            width: 50%;
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
      .album-list-wrapper{
        flex: 1;
      }
      .albumlist-others{
        width: 290px;
        margin-left: 60px;
        .title1{
            font-size: 20px;
            font-weight: 400;
            line-height: 46px;
          }
        .album-introduction{
          margin-bottom: 30px;
          p{
            font-size: 14px;
            line-height: 22px;
          }
        }
          .similar-album-list{
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