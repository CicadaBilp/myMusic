<template>
  <div class="home">
    <div class="home-nav-bar">
      <h1 class="icon">
        <a href="https://y.qq.com/" class="logo">
          <img
            src="//y.gtimg.cn/mediastyle/yqq/img/logo.png?nowebp=1"
            alt="QQ音乐"
        /></a>
      </h1>
      <ul class="nav-list">
        <li v-for="(item, index) in navList" :key="index">{{ item.name }}</li>
      </ul>
      <div class="search">
        <input type="text" class="input" placeholder="搜索音乐,MV,歌单,用户" />
        <i></i>
      </div>
      <div class="head-opt">
        <div class="login">
          <div class="login-img">
            <img src="../../assets/image/g.jpg" alt="" />
            <img src="../../assets/image/login_qq.png" alt="" />
          </div>
        </div>
        <div class="open-vip">
          <a href="">开通VIP</a>
          <ul>
            <li>开通绿钻豪华版</li>
            <li>开通付费包</li>
          </ul>
        </div>
        <div class="pay">
          <a href="">充值</a>
          <ul>
            <li>购买乐币</li>
            <li>充值饭票</li>
          </ul>
        </div>
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  data() {
    return {
      navList: [
        { name:'音乐馆', path:'/home/musichall' },
        { name:'我的音乐', path:'/home/mymusic' },
        { name:'客户端', path:'/home/client' },
        { name:'开放平台', path:'/home/open' },
        { name:'VIP', path:'/home/vip' },
      ],
    };
  },
};
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";
.home{
  height: 1600px;
}
.home-nav-bar {
  height: 90px;
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
  // background-color: aquamarine;
  border-bottom: 1px solid #f2f2f2;
  h1 {
    position: absolute;
    top: 22px;
    left: 0;
  }
  .nav-list {
    // min-width: 453px;
    position: absolute;
    left: 198px;
    top: 0;
    li {
      height: 90px;
      line-height: 90px;
      margin-right: -5px;
      float: left;
      position: relative;
      text-align: center;
      font-size: 18px;
      // box-sizing: border-box;
      padding: 0 20px;
      // background-color: aquamarine;
      &:hover {
        color: #31c27c;
        cursor: pointer;
      }
      &.active{
       background-color: #31c27c; 
       color: #fff;
      }
    }
  }
  .search {
    height: 36px;
    line-height: 36px;
    margin-top: 26px;
    position: absolute;
    top: 0;
    right: 284px;
    border: 1px solid #ccc;
    border-radius: 3px;
    padding: 0 33px 0 11px;
    input {
      width: 174px;
      border: none;
      padding: 0 0;
      outline: none;
      height: 30px;
      transition: all 0.5s;
    }
  }
  .head-opt {
    height: 90px;
    position: absolute;
    top: 0;
    right: 0;
    font-size: 13px;
    @include centers;
    a {
      display: block;
      box-sizing: border-box;
      line-height: 38px;
      padding: 0 15px 0 10px;
      text-align: center;
      border: 1px solid #c9c9c9;
      border-radius: 3px;
      &::after {
        position: absolute;
        content: "";
        right: 8px;
        top: 16px;
        width: 0;
        height: 0;
        border-left: 4px solid transparent;
        border-right: 4px solid transparent;
        border-top: 6px solid currentColor;
      }
    }
    ul {
      width: 100%;
      display: none;
      position: absolute;
      z-index: 5;
      background-color: #fff;
      left: 0;
      top: 38px;
      li {
        line-height: 40px;
        border: 1px solid #c9c9c9;
        cursor: pointer;
        text-align: center;
        &:hover {
          background-color: #31c27c;
          color: #fff;
        }
        &:nth-child(1) {
          border-top: 1px solid #c9c9c9;
          border-bottom: none;
        }
        &:nth-last-child() {
          border-bottom-left-radius: 3px;
          border-bottom-right-radius: 3px;
        }
      }
    }
    .login {
      width: 38px;
      height: 90px;
      margin-right: 10px;
      position: relative;
      @include centers;
      .login-img {
        width: 38px;
        height: 38px;
        border-radius: 50%;
        overflow: hidden;
        position: relative;
        // display: none;
        img {
          width: 100%;
          // &:nth-last-child(){
          //   width: 57%;
          //   height: 57%;
          //   position: absolute;
          //   bottom: 0;
          //   right: 0;
          // }
        }
      }
    }
    .open-vip {
      width: 122px;
      height: 38px;
      // float: left;
      position: relative;
      // background-color: blueviolet;
      a {
        background-color: #31c27c;
        color: #fff;
        &::after {
          border-top-color: #fff;
        }
      }
      &:hover {
        ul {
          display: block;
        }
      }
    }
    .pay {
      width: 83px;
      height: 38px;
      margin-left: 10px;
      // float: left;
      position: relative;
      // background-color: brown;
      &:hover {
        ul {
          display: block;
        }
      }
    }
  }
}
@media (max-width: 1240px) {
  .home-nav-bar {
    min-width: 900px;
    margin: 0 50px;
  }
}
@media (max-width: 1220px) {
  .home-nav-bar {
    .search {
      position: absolute;
      top: 0;
      right: 189px;
    }
    .pay {
      display: none;
    }
  }
}
@media (max-width: 1135px) {
  .home-nav-bar {
    .search {
      padding-left: 3px;
      input {
        width: 0;
        transition: all 0.5s;
      }
    }
  }
}
</style>
