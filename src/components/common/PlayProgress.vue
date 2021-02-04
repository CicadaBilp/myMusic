<template>
  <div class="progress-bar" @click="changePrpgress" ref="probar">
    <div class="bar-inner">
      <div class="progress" ref="progress">
        <div class="progress-btn"></div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    percent:{
      type:Number,
      default:0
    }
  },
  watch:{
    percent(newpercent){
      if(newpercent >= 0){
        this.$refs.progress.style.width = newpercent*100 + '%'
      }
    }
  },
  methods:{
    changePrpgress(e){
      const rect = this.$refs.probar.getBoundingClientRect()
      const percent = (e.clientX - rect.left) / rect.width
      this.$refs.progress.style.width = percent*100 + '%'
      this.$emit('changeprogress',percent)
    }
  }
}
</script>

<style scopde lang="scss">
@import "assets/css/global.scss";

.progress-bar{
  width: 100%;
  height: 8px;
  .bar-inner{
    position: relative;
    height: 2px;
    background: rgba(255,255,255,.1);
    .progress{
      position: absolute;
      top: 0;
      left: 0;
      height: 2px;
      background: rgba(255,255,255,.7);
      .progress-btn{
        position: absolute;
        width: 10px;
        height: 10px;
        top: -4px;
        right: -4px;
        background: url('../../assets/image/player.png');
        background-position: 0 -170px;
        opacity: 1;
        filter: none;
    }
    }
    
  }
}

</style>