<template>
  <div class="container" :style="style" :class="{'hide-bar':hidebar}">
      <slot></slot>
  </div>
</template>

<script>
export default {
  props:{
    h:String,
    hidebar:Boolean
  },
  computed:{
    style(){
      return {
        height:this.h
      }
    }
  }
}
</script>

<style scoped lang="scss">
.container{
  overflow:auto ;
  &::-webkit-scrollbar{
    width:4px;  /*宽高可调节，如果为0，则消失*/
    height:4px;
  }
}
// /*滚动条样式*/
// /*定义滚动条高度及背景 宽高分别对应横竖滚动条的尺寸*/
.hide-bar.container{
  overflow: hidden;
}
// ::-webkit-scrollbar{
//   width:0;  /*宽高可调节，如果为0，则消失*/
//   height:0;
//   }
//   /*定义滚动条轨道，内阴影+圆角*/
// .container::-webkit-scrollbar-track{
//   -webkit-box-shaow:inset 0 0 6px rgba(0,0,0,0.3);
//   border-radius:10px;
//   background-color:#f5f5f5;
//   }
//   /*定义滑块 内阴影+圆角*/
// .container::-webkit-scrollbar-thumb{
//   border-radius:10px;
//   // box-shadow:inset 0 0 6px rgba(0,0,0,.3);
//   background-color:#ccc;
//   }


</style>