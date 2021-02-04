<template>
<!--  -->
    <div class="play-music-wrapper" :class="{'show-mini-play' :!fullScreen }" v-show="playlist.length > 0">
      <transition name="normal">
        <div class="normal-play" v-show="fullScreen">
          <div class="play-music-header">
            <h1 @click="hideMax"></h1>
            <div class="header-info">
              <span>千万干品质曲库尽享, 只等你来</span>
              <div class="download">
                <i></i>
                <span>客户端下载</span>
              </div>
              <span>登录</span>
              <span>设置</span>
            </div>
          </div>
          <div class="play-music">
            <div class="play-list">
              <div class="tool-wrapper">
                <option-btn
                  btnname="收藏"
                  :xposition="-60"
                  :yposition="0"
                  bgcolor="transparent"
                  color="#fff"
                />
                <option-btn
                  btnname="添加到"
                  :xposition="-20"
                  :yposition="0"
                  bgcolor="transparent"
                  color="#fff"
                />
                <option-btn
                  btnname="下载"
                  :xposition="-40"
                  :yposition="-220"
                  bgcolor="transparent"
                  color="#fff"
                />
                <option-btn
                  btnname="删除"
                  :xposition="-120"
                  :yposition="0"
                  bgcolor="transparent"
                  color="#fff"
                />
                <option-btn
                  btnname="清空列表"
                  :xposition="-50"
                  :yposition="-350"
                  bgcolor="transparent"
                  color="#fff"
                />
              </div>
              <div class="list-wrapper">
                <scroll h="100%">
                  <music-list 
                    type="播放" 
                    :list="sequenceList" 
                    @select="handleSelect"
                  />
                </scroll>
              </div>
            </div>
            <div class="music-info">
              <div class="base-info">
                <div class="base-img">
                  <img :src="baseimg" alt="" ref="baseimg">
                </div>
                <div class="song-name" v-if="currentSong.id">歌曲名: {{currentSong.name}}</div>
                <div class="singer-name" v-if="currentSong.id">歌手名: {{singername}}</div>
                <div class="album-name" v-if="currentSong.id">专辑名: {{currentSong.al.name}}</div>
              </div>
              <div class="lyric-info">
                <div class="lyric-box">
                  <div class="lyric-info-inner"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </transition>
      <div class="mini-play">
        <div class="mini-play-inner">
          <div class="mini-img" v-show="!fullScreen" @click="showMax">
            <img :src="baseimg" alt="">
          </div>
          <span class="pre" @click="preMusic"></span>
          <span class="pause" 
                @click="togglePlaying"
                :class="{'is-playing':playing}"
          ></span>
          <span class="next" @click="nextMusic"></span>
          <div class="progress-music">
            <div class="music-info" v-if="currentSong.id">
              <span>{{currentSong.name}} - {{singername}}</span>
              <span>{{formatCurrentTime(currentTime)}} / {{totaltime}}</span>
            </div>
            <play-progress 
              :percent="percent"
              @changeprogress="changeprogress"
            />
          </div>
          <span class="play-mode" 
                :class="modeplay"
                @click="changeMode"
          ></span>
          <span class="love-music"></span>
          <span class="comment"></span>
          <div class="volume">
            <span class="volume-icon"></span>
            <div class="volume-progress">
            </div>
          </div>
        </div>
      </div>
      <div class="mask"></div>
      <div class="bg-play" ref="bgplay" :style="bgplay"></div>
      <audio 
        :src="audiourl" 
        ref="audio" 
        crossOrigin="anonymous"
        @canplay="ready()"
        @error="error()"
        @timeupdate="updateTime"
        @ended="endplay"
      >
      </audio>
    </div>
</template>

<script>
import MusicList from "../../components/common/MusicList.vue";
import OptionBtn from "../../components/common/OptionBtn.vue";
import Scroll from '../../components/common/Scroll.vue'
import PlayProgress from '../../components/common/PlayProgress.vue'
import { mapGetters,mapMutations } from "vuex";
import {API} from '../../request/api'
import {timeMixin} from '../../utils/mixin'
import {playMode} from '../../utils/play'
import {shuffle} from '../../utils/utils.js'

export default {
  mixins:[timeMixin],
  components: { OptionBtn, MusicList,Scroll,PlayProgress },
  data(){
    return {
      songReady:false,
      currentTime:0
    }
  },
  computed: {
    ...mapGetters([
      "fullScreen", 
      "playlist",
      "currentSong",
      "playing",
      "currentIndex",
      "mode",
      "sequenceList"
    ]),
    //audio播放的src连接(通过vuex中的currentSong的id来拼接)
    audiourl(){
      if(this.currentSong.id){
        return `https://music.163.com/song/media/outer/url?id=${this.currentSong.id}.mp3`
      }
      
    },
    bgplay(){
      if(this.currentSong.al){
        return {
          backgroundImage:`url('${this.currentSong.al.picUrl}')`
        }
      }
    },
    baseimg(){
      if(this.currentSong.al){
        return this.currentSong.al.picUrl
      }
    },
    singername(){
      let singers = ''
      this.currentSong.ar.forEach((item2) => {
          singers += item2.name + ' / '
      })
      return singers.slice(0,-2)
    },
    modeplay(){
      return this.mode === playMode.sequence ? 'sequence' :this.mode === playMode.loop ? 'loop' :'random'
    },
    //歌曲总时长
    totaltime(){
      return this.formatPlayTime(this.currentSong.dt)
    },
    percent(){
      return Math.floor(this.currentTime) / (Math.floor(this.currentSong.dt/1000))
    }
  },
  methods:{
    ...mapMutations({
      setFullScreen:'SET_FULL_SCREEN',
      setCurrentIndex:'SET_CURRENT_INDEX',
      setPlayStatus:'SET_PLAYING_STATUS',
      setPlayMode:'SET_PLAY_MODE',
      setPlayList:'SET_PLAYLIST'
    }),
    //点击播放列表中的播放按钮
    handleSelect(item,index){
      //点击播放的歌曲设置给currentsong
      this.setCurrentIndex(index)
      this.setPlayStatus(true)
      API.getLyric(item.id).then((res) => {
        console.log(res.data.lrc.lyric);
      })
    },
    //隐藏全屏
    hideMax(){
      this.setFullScreen(false)
    },
    //显示全屏
    showMax(){
      this.setFullScreen(true)
    },
    //切换vuex中播放状态
    togglePlaying(){
      if(!this.songReady){
        return
      }
      this.setPlayStatus(!this.playing)
    },
    nextMusic(){
      if(!this.songReady){
        return
      }
      let index = this.currentIndex + 1
      if(index === this.playlist.length){
        index = 0
      }
      this.setCurrentIndex(index)
      if(!this.playing){
        this.setPlayStatus(true)
      }
      this.songReady = false
    },
    preMusic(){
      if(!this.songReady){
        return
      }
      let index = this.currentIndex - 1
      if(index == -1){
        index = this.playlist.length - 1
      }
      this.setCurrentIndex(index)
      if(!this.playing){
        this.setPlayStatus(true)
      }
      this.songReady = false
    },
    //audio的准备时的钩子函数(准备好时会调用将songReady更改为true)
    ready(){
      this.songReady = true
    },
    //当audio加载src失败时执行(在这首歌失败的情况下也将songReady更改为true)
    error(){
      this.songReady = true
    },
    //播放的钩子函数,更新currenttime
    updateTime(e){
      this.currentTime = e.target.currentTime
    },
    //点击进度条后,接收到位置百分比设置给当前播放时间
    changeprogress(pre){
      this.$refs.audio.currentTime = pre  * Math.floor(this.currentSong.dt/1000)   
    },
    resetCurrentIndex(list){
      let index = list.findIndex((item) => {
        return item.id === this.currentSong.id
      })
      this.setCurrentIndex(index)
    },
    //点击切换播放模式
    changeMode(){
      let newmode = (this.mode + 1) % 3
      this.setPlayMode(newmode)
      let list = null
      if(newmode = playMode.random){
        list = shuffle(this.sequenceList)
      }else{
        list = this.sequenceList
      }
      this.resetCurrentIndex(list)
      this.setPlayList(list )
    },
    loop(){
      this.$refs.audio.currentTime = 0
      this.$refs.audio.play()
    },
    endplay(){
      if(this.mode === playMode.loop){
        this.loop()
      }else{
        this.nextMusic()
      }
    }
  },
  watch:{
    currentSong(newsong,oldsong){
      if(newsong.id === oldsong.id){
        return 
      }
      this.$nextTick(() => {
         this.$refs.audio.play()
      })   
    },
    //监听playing值的变化
    playing(newPlaying){
      const audio = this.$refs.audio
      this.$nextTick(() => {
        newPlaying ? audio.play() : audio.pause()
      })
    }
    //261329
  },
  mounted() {
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";



.play-music-wrapper {
  width: 100%;
  // height:100%;
  position: fixed;
  top:0;
  bottom:0;
  z-index: 140;
  background-color: rgb(224, 224, 224);
  overflow: hidden;
  &.show-mini-play{
    // height: 80px;
    // left: 0;
    top: auto;
  }
  .normal-play{
    // min-width: 1072px;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 80px;
    .play-music-header {
    padding: 20px 48px 0 20px;
    margin-bottom: 20px;
    display: flex;
    justify-content: space-between;
    h1 {
      width: 48px;
      height: 48px;
      background: url("../../assets/image/icon_sprite.png");
      background-position: -191px -593px;
    }
    .header-info {
      @include centers;
      font-size: 14px;
      line-height: 1.5;
      span {
        margin: 0 15px;
        color: #fff;
      }
      .download {
        margin-right: 13px;
        padding: 0 17px;
        height: 28px;
        line-height: 28px;
        border-radius: 28px;
        font-size: 15px;
        color: #fff;
        text-align: center;
        background-color: #31c27c;
      }
    }
  }
  .play-music {
    $a:130px;
    // max-width: 1300px;
    margin: 0 7.638889%;
    min-width: 1080px;
    height:calc(100% - #{$a});
    min-height: 328px;
    display: flex;
    .play-list {
      height: 100%;
      flex: 1;
      margin-right: 90px;
      .tool-wrapper {
        height: 38px;
        display: flex;
      }
      .list-wrapper{
        $h:38px;
        height:calc(100% - #{$h});
      }
    }
    .music-info{
        width: 340px;
        height: 100%;
        text-align: center;
        font-size: 14px;
        line-height: 24px;
        // background-color: #31c27c;
        color:  rgba(225,225,225,.8);
        .base-info{
          height: 285px;
          margin-bottom: 30px;
          @include columnCenter;
          .base-img{
            width: 186px;
            height: 186px;
            position: relative;
            &::after{
              content: "";
              position: absolute;
              left: 9px;
              top: 0;
              width: 201px;
              height: 180px;
              background: url('../../assets/image/album_cover_player.png');
              background-repeat: no-repeat;
              background-size: 100% 100%;
            }
            img{
              width: 100%;
              height: 100%;
            }
          }
          .song-name{
            height: 28px;
            margin-top: 15px;
          }
          .singer-name{
            height: 28px;
          }
          .album-name{
            height: 28px;
          }
        }
        .lyric-info{
          height: 200px;
          .lyric-box{
            overflow: hidden;
            .lyric-info-inner{

            }
          }
        }
      }
  }
  }
  
  .mini-play {
    width: 100%;
    height: 80px;
    overflow: hidden;
    position: fixed;
    z-index: 150;
    left: 0;
    bottom: 0;
    // border: 1px solid red;
    background-color: rgba(0,0,0,.6);
    .mini-play-inner{
      height: 100%;
      min-width: 1080px;
      margin: 0 7.638889%;
      position: relative;
      .mini-img{
        width: 60px;
        height: 60px;
        position: absolute;
        z-index: 150;
        left: -80px;
        top: 10px;
        background-color: aquamarine;
        img{
          width: 100%;
          height: 100%;
        }
      }
      .pre,.pause,.next,.play-mode,.love-music,.comment,
      .volume-icon{
        background-image: url('../../assets/image/player.png');
        opacity:.8;
        position: absolute;
        &:hover{
          cursor: pointer;
          opacity: 1;
        }
      }

      .pre{
        width: 20px;
        height: 20px;
        top: 26px;
        left:0;
        background-position-y:-30px;
      }
      .pause{
        width: 21px;
        height: 29px;
        top: 21px;
        left: 65px;
        background-position: 0 0;
        &.is-playing{
          background-position: -30px 0;
        }
      }
      .next{
        width: 20px;
        height: 20px;
        top: 26px;
        left: 132px;
        background-position: 0 -52px;
      }

      .progress-music{
        height: 100%;
        margin: 0 448px 0 208px;
        @include columnCenter;
        .music-info{
          width: 100%;
          display: flex;
          margin-bottom: 10px;
          justify-content: space-between;
          color: rgba(225,225,225,.8);
          font-size: 14px;
        }
      }
        .play-mode{
          top: 26px;
          right: 378px;
          &.sequence{
            width: 23px;
            height: 20px;
            background-position: 0 -260px
          }
          &.loop{
            width:26px;
            height:25px;
            background-position: 0 -232px
          }
          &.random{
            width: 25px;
            height: 19px;
            background-position: 0 -74px
          }
        }
        .love-music{
          top: 26px;
          right: 312px;
          width: 23px;
          height: 21px;
          background-position: 0 -96px;
        }
        .comment{
          top: 26px;
          right: 237px;
          width: 24px;
          height: 24px;
          background-position: 0 -400px
        }
        .volume{
          position: absolute;
          top: 26px;
          right: 59px;
          width: 90px;
          padding-top: 13px;
          .volume-icon{
            top:0px;
            left: -34px;
            width: 26px;
            height: 21px;
            background-position: 0 -144px;
          }
          .volume-progress{

          }
        }
    }
  }
  .mask,.bg-play{
    width: 100%;
    height: 100%;
    position:absolute;
    top: 0;
    left: 0;
    overflow: hidden;
  }
  .mask{
    background-color: rgba(0,0,0,.35);
    z-index: -1;
  }
  .bg-play{
    background-repeat: no-repeat;
    background-size: cover;
    filter: blur(25px);
    opacity: .6;
    z-index: -2;
    transform: translateZ(0);
  }
}

.normal-enter-active,.normal-leave-active{
  transition: all 1s;
}
.normal-enter,.normal-leave-to{
  opacity: 0;
}
.normal-enter,.normal-leave-to{
  opacity: 1;
}

</style>