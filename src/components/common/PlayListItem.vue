<template>
  <div class="list-item-wrapper"  :style="itemWrapper" >
    <div class="list-item" :class="className">
      <div class="item-img" :style="itemImg" >
        <img v-lazy="imgsrc" alt="" />
        <i class="mask"></i>
        <i class="play-icon"  @click="handleSelect()"></i>
      </div>
      <div class="item-info" v-if="config.type !== 'wonderHot'">
        <div class="title-wrapper">
          <div class="title">{{title}}</div>
          <div class="singer" v-if="config.type !== 'hotMusic'">{{singer}}</div>
        </div>
        <div class="play-info" v-if="config.type !== 'newDisc'">
          <span>{{config.type=='hotMusic' ? '播放量: ' :''}}</span>
          <i></i>
          <span>{{config.type=='newSong' ? formatPlayTime(items.duration) : playCount   }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {tranNumber} from '../../utils/utils'
import {timeMixin} from '../../utils/mixin'
export default {
  mixins:[timeMixin],
  props: {
    items: Object,
    config:Object
  },
  computed: {
    //图片容器的大小
    itemImg() {
      const obj = this.config
      return {
        width: obj.picwidth + "px",
        height: obj.picheight + "px",
      }
    },
    //item总的大小百分比
    itemWrapper() {
      return { width: this.config.percent };
    },
    //item的第二类名
    className(){
      const obj = this.config
      if(obj.type == 'newSong'){
        return 'horizontal'
      }else{
        return 'vertical'
      }
    },
    //图片的地址
    imgsrc(){
      const obj = this.config
      if(obj.type == 'hotMusic') return this.items.coverImgUrl  //推荐歌单部分图片
      if(obj.type == 'newSong') return this.items.album.picUrl  //新歌推荐部分图片
      if(obj.type == 'newDisc') return this.items.picUrl  //新碟部分图片
      if(obj.type == 'wonderHot') return this.items.imageUrl  //精彩推荐图片部分
      if(obj.type == 'mv') return this.items.cover  //mv

      return ''
    },
    //标题信息
    title(){
      return this.items.name   //推荐歌单的模块标题
    },
    singer(){
      const obj = this.config
      if(obj.type == 'mv'){
        return this.items.artistName
      }else{
        return this.items.artists[0].name 
      }    
    },
    playCount(){
      return tranNumber(this.items.playCount,2)
    }
  },
  methods:{
    handleSelect(){
      this.$emit('itemselect',this.items.id)
    }
  }
};
</script>

<style scopde lang="scss">
@import "assets/css/global.scss";

.list-item-wrapper {
  .list-item {
    margin-right: 20px;
    .item-img{
      position: relative;
      overflow: hidden;
      &:hover{
        .mask{
          opacity: .2;
          transition: all .5s;
        }
        .play-icon{
          opacity: 1;
          transform: scale(1);
        }
        img{
          transform:scale(1.07);
        }
      }
      img{
        width: 100%;
        height: 100%;
        transition: all .5s;
      }
      .mask{
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: 0;
        background-color: #000;
        transition: all .5s;
      }
      .play-icon{
        width: 70px;
        height: 70px;
        border: 1px solid transparent;
        background: url('../../assets/image/cover_play.png');
        background-size: 100% 100%;
        position: absolute;
        top: 50%;
        left: 50%;
        z-index: 100;
        margin: -35px;
        opacity: 0;
        transform: scale(.7);
        transition: all .5s;
      }
    }
    .item-info{
      color: #999;
      .title{
        @include ellipsis;
      }
    }
    &.vertical{
      @include columnCenter;
      .item-img {
        margin:15px 0;
        position: relative;
      }
      .item-info {
        width: 100%;
        font-size: 14px;
        .title {
          line-height: 22px;
          color: #000;
          @include ellipsis;
        }
        .singer{
          color: #999;
          line-height: 22px;
          ;
        }
        .play-info {
          line-height: 22px;
          color: #999;
        }
      }
    }
    &.horizontal{
      display: flex;
      .item-img {
        margin:0 15px 15px 0;
        position: relative;
      }
      .item-info{
        flex: 1;
        // width: 100%;
        font-size: 14px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        overflow: hidden;
        text-overflow: ellipsis;
        .title-wrapper{
          width: 70%;
          .title {
            width: 100%;
            line-height: 22px;
            color: #000;
            margin-bottom: 5px;
            @include ellipsis;
          }
        }
        .play-info {
          width: 43px;
          line-height: 22px;
        }
      }
    }
    
  }
}
</style>