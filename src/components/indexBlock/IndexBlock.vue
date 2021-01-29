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
          :key="index"
          >{{ name }}</span
        >
        <div class="btn-left" v-if="btnleft">{{ btnleft }}</div>
      </div>
      <div class="btn-right" :style="{top:btntop + 'px'}" v-if="btntop">更多</div>
      <slot></slot>
    </div>
    <div class="left toggle" @click="pre()">左</div>
    <div class="right toggle" @click="next()">右</div>
  </div>
</template>

<script>
export default {
  props: {
    title: String, //标题
    navlist: Array, //二级标题数组
    btnleft: String, //左边按钮
    btntop: Number, //右边按钮(更多)的定位top值
  },
  methods:{
    pre(){
    },
    next(){

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
    border: 1px solid green;
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
    // background-color: brown;
    line-height: 108px;
    text-align: center;
    transition: all 0.5s;
    &:hover {
      cursor: pointer;
    }
    &.left {
      left: 0;
      transform: translateX(-100%);
    }
    &.right {
      right: 0;
      transform: translateX(100%);
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