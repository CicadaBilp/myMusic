<template>
  <div class="no-result">
    <p class="no-result-title">很抱歉, 并没有找到与<span>{{keywords}}</span>相关的结果</p>
    <p class="no-result-title">建议您: 请检查输入的关键词是否有误或过长</p>
  </div>
</template>

<script>
export default {
  props:{
    keywords:String
  }
}
</script>

<style scopde lang="scss">
@import "assets/css/global.scss";
.no-result{
  .no-result-title{
    height: 40px;
    font-size: 22px;
    color: #ccc;
    @include centers;
    span{
      font-size: 24px;
      color: yellowgreen;
    }
  }
}

</style>