<template>
    <div class="charts-item" :style="bgposition">
    <div class="title">
      <div class="title1">巅峰</div>
      <div class="title2">{{items.name}}</div>
    </div>
    <div class="play-icon">
      <span></span>
      <i></i>
    </div>
    <ul class="list">
      <li v-for="(item,index) in items.tracks" :key="index" class="list-item">
        <span class="item-number">{{index+1}}</span>
        <div class="song-name"> {{item.first}}</div>
        <div>{{item.second}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props:{
    items:Object,
    position:String
  },
  computed:{
    bgposition(){
      return { backgroundPosition:this.position + ' 0' }
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
  .charts-item{
    width: 25%;
    padding: 30px;
    margin-right:40px;
    overflow: hidden;
    background: url('../../assets/image/bg_index_top.jpg');
    background-size: 1350px;
    &:nth-last-child(1){
      margin: 0
    }
    .title{
      @include columnCenter;
      .title1{
        height: 22px;
        margin:30px 0 10px 0;
        font-size: 22px;
        color:#f8eaee;
      }
      .title2{
        height: 36px;
        line-height: 1;
        font-size: 26px;
        color: #fff;
        font-weight: 400
      }
    }
    .play-icon{
      height: 70px;
      margin: 15px 0;
      @include centers;
      span{
        width: 36px;
        height: 2px;
        background-color: #fff;
      }
    }
    .list{
      margin-bottom: 70px;
      .list-item{
      position: relative;
      margin-bottom: 27px;
      padding-left: 15px;
      font-size: 14px;
      color: #fff;
      .song-name{
        margin-bottom: 10px;
        overflow: hidden;
        text-overflow: ellipsis
      }
      .item-number{
        position: absolute;
        top: 0;
        left: 0;
      }
    }
    }
  }



</style>