<template>
  <div class="btn-wrapper" :style="wrapperStyle" @click="handleClick">
    <i class="btn-icon" :style="iconStyle"></i>
    <span class="btn-name">{{btnname}}</span>
  </div>
</template>

<script>
    
export default {
  props:{
    btnname:String,
    xposition:Number,
    yposition:Number,
    bgcolor:String,
    color:String,
  },
  computed:{
    //按钮样式
    wrapperStyle(){
      return {
        backgroundColor:this.bgcolor,
        color:this.color,
        borderColor:this.bordercolor
      }
    },
    //按钮中图标的背景图定位
    iconStyle(){
      return {
        backgroundPosition:this.xposition+'px' + ' ' + this.yposition+'px'
      }
    }
  },
  methods:{
    handleClick(){
      this.$emit('clickbtn',this.btnname)
    }
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.btn-wrapper{
  height: 38px;
  box-sizing: border-box;
  border: 1px solid #ccc;
  padding: 0 23px;
  margin-right: 20px;
  display: flex;
  align-items: center;
  border-radius: 2px;
  opacity: 0.8;
  &:hover{
    background-color: rgba(0, 0, 0, .1);
    cursor: pointer;
    opacity: 1;
    border-color: rgba(255,255,255,1);
  }
  span{
    font-size: 14px;
  }
  .btn-icon{
    width: 16px;
    height: 16px;
    margin-right: 8px;
    display: block;
    background:url('../../assets/image/icon_sprite.png');
    background-repeat: no-repeat;
    background-size: 200px 340px;
    background-position: -57px -220px;
  }
}
</style>