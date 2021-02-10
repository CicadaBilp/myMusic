<template>
  <div class="wrapper">
    <div class="inner">
      <div class="title">
        {{ title }}
      </div>
      <div class="nav-bar" v-if="navlist">
        <span
          v-for="(name, index) in navlist"
          class="nav-bar-list-item"
          :class="{'nav-active' : index==navindex}"
          :key="index"
          @click="changeList(name,index)"
        > {{ name }}
        </span>
        <div class="btn-left" v-if="btnleft">{{ btnleft }}</div>
      </div>
      <div class="btn-right" :style="{top:btntop + 'px'}" v-if="btntop">更多</div>
      <slot></slot>
    </div>
    <div class="left toggle" @click="pre()"></div>
    <div class="right toggle" @click="next()"></div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      navindex:0
    }
  },
  props: {
    title: String, //标题
    navlist: Array, //二级标题数组
    btnleft: String, //左边按钮
    btntop: Number, //右边按钮(更多)的定位top值
  },
  methods:{
    //点击上一页
    pre(){
      this.$children[0].listPre()
    },
    //点击下一页
    next(){
       this.$children[0].listNext()
    },
    //点击二级标题切换列表
    changeList(name,index){
      this.navindex = index
      this.$emit('change',name)
    }
  }
};
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.wrapper {
  width: 100%;
  // height: 532px;
  overflow: hidden;
  position: relative;
  background: url("../../assets/image/bg_detail.jpg") 50% 0 repeat-x;
  &:hover {
    .left.toggle {
      background-color: rgba(0, 0, 0, 0.1);
      transform: translateX(0);
    }
    .right.toggle {
      background-color: rgba(0, 0, 0, 0.1);
      transform: translateX(0);
    }
  }
  .inner {
    max-width: 1200px;
    margin: 0 auto;
    height: 100%;
    position: relative;
    // border: 1px solid green;
    // overflow: hidden;

    .title {
      height: 40px;
      position: relative;
      font-size: 30px;
      font-weight: bold;
      letter-spacing: 8px;
      padding-top: 4.16667%;
      padding-bottom: 2%;
      text-align: center;
    }
    .nav-bar {
      height: 50px;
      text-align: center;
      .nav-bar-list-item {
        display: inline-block;
        font-size: 15px;
        margin: 0 24px;
        &:hover {
          color: #31c27c;
          cursor: pointer;
        }
        &.nav-active{
          color: #31c27c;
        }
      }
    }

    .btn-left {
      position: absolute;
      top: 101px;
      left: 0;
      z-index: 10;
      border-radius: 2px;
      border: 1px solid #c9c9c9;
      font-size: 14px;
      padding: 0 23px;
      height: 38px;
      line-height: 38px;
      box-sizing: border-box;
    }
    .btn-right {
      position: absolute;
      right: 0;
    }
  }

  .toggle {
    width: 79px;
    height: 108px;
    margin-top: -54px;
    position: absolute;
    z-index: 10;
    top: 50%;
    background: rgba(0, 0, 0, 0.05);
    line-height: 108px;
    text-align: center;
    transition: all 0.5s;
    &::after{
      content: "";
      width: 20px;
      height: 39px;
      position: absolute;
      z-index: 20;
      top: 0;
      left:0;
      bottom: 0;
      right: 0;
      margin: auto;

      background: url('../../assets/image/icon_sprite.png');  
      background-size: 200px 340px;   
    }
    &:hover {
      cursor: pointer;
    }
    &.left {
      left: 0;
      transform: translateX(-100%);
      &::after{
        background-position: -20px -120px;
      }
    }
    &.right {
      right: 0;
      transform: translateX(100%);
      &::after{
        background-position: 0 -120px;
      }
    }
  }
}

@media (max-width: 1240px) {
  .wrapper {
    .inner {
      min-width: 900px;
      margin: 0 50px;
    }
  }
}
</style>