<template>
  <div class="search-list-wrapper">
    <div class="head-search" :class="{'search-fix' : isFixed}">
      <div class="search-wrapper">
        <input type="text" :value="keywords">
        <div class="search-btn"><i></i></div>
      </div>
      <!-- <div class="hot-search">
        热门搜索: 
        <span>我们的歌</span>
        <span>冰雪奇缘2</span>
        <span>张杰</span>
        <span>桥边姑娘</span>
        <span>星辰大海</span>
      </div> -->
    </div>
    <div class="list-info">
        <div class="info-header">
            <!-- <div class="info-header-singer">
                <div class="singer-img"><img src="" alt=""></div>
                <div class="singer-count">
                    <span>周杰伦</span>
                    <span>123</span>
                    <span>456</span>
                    <span>789</span>
                </div>
                <div class="green-play">
                    <option-btn btnname="播放全部"
                        :xposition="-77"
                        :yposition="-220"
                        bgcolor="#31c27c"
                        color="#fff"
                    ></option-btn>
                </div>
            </div> -->
            <div class="info-type">
                <span v-for="(item) in typelist" 
                      :key="item.id" 
                      :class="{'type-active':item.id === typeindex}"
                      @click="changeType(item)"
                >
                    {{item.name}}
                </span>
            </div>
            <div class="info-btns">
                <option-btn :xposition="-57" :yposition="-220" btnname="播放全部"/>
     
                <option-btn :xposition="-20" :yposition="0" btnname="添加到"/>
                <option-btn :xposition="-40" :yposition="-220" btnname="下载"/>
                <option-btn :xposition="-120" :yposition="0" btnname="批量操作"/>
            </div>
        </div>
        <scroll h="656px">
          <music-list :type="type" :list="currentlist" @select="handleSelect"></music-list>
        </scroll>
    </div>
    <!-- <div v-show="">
      <no-result :keywords="keywords"></no-result>
    </div> -->
    <div class="footer"></div>
  </div>
</template>

<script>
import MusicList from '../../components/common/MusicList.vue'
import OptionBtn from '../../components/common/OptionBtn.vue'
import Scroll from '../../components/common/Scroll.vue'
import NoResult from '../../components/common/NoResult.vue'
import {mapActions, mapGetters} from 'vuex'
import {API} from '../../request/api'


const LIMIT = 20;

export default {
  components:{ MusicList, OptionBtn,Scroll,NoResult },
  data(){
    return{
      isFixed:false,
      type:'单曲',
      typelist:Object.freeze(
          [{ name:'单曲',id:1 },
           { name:'专辑',id:10 },
           { name:'歌单',id:1000 },
           { name:'MV',id:1004 },
           { name:'用户',id:1002 },
           { name:'歌词',id:1006 }
        ]
      ),
      typeindex:1,
      songlists:[],
      albumlists:[],
      playlistlists:[],
      songoffset:0,
      albumoffset:0,
      playlistoffset:0,
      keywords:'',
      flag:false
    }
  },
  computed:{
    ...mapGetters(['playlist']),
    //返回对应字符串
      arr(){
            switch (this.type) {
            case '单曲':
            return 'songs';
            case '专辑':
            return 'albums';
            case '歌单':
            return 'playlists';
            default:
                break;
        }
      },
      //当前展示哪一个数组
      currentlist(){
        switch (this.type) {
            case '单曲':
            return this.songlists;
            case '专辑':
            return this.albumlists;
            case '歌单':
            return this.playlistlists;
            default:
                break;
        }
      }
  },
  methods:{
    //导入vuex中的actions设置播放列表和状态
      ...mapActions(['selectPlay','insertSong']),
    //滚动条滚动处理函数
    handleScroll () {
      let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      const offsetTop = document.querySelector('.hot-search').offsetTop - 45
      if(scrollTop > offsetTop){
        this.isFixed = true
      }else{
        this.isFixed = false
      }
    },
    //点击搜索结果tab
    changeType(item){
        this.typeindex = item.id
        this.type = item.name
        console.log(this.type);
        if(this.currentlist.length > 0 && !this.flag){
          console.log();
          return
        }
        this.getSearch(item.id,0,LIMIT,this.keywords)
    },
    //处理点击列表项
     async handleSelect(item,index){
        if(this.type == '单曲'){
            //将点击的歌曲传给vuex中的播放列表
            const id = item.id
            let songdetail = await API.getSongDetail(id)
            if(!this.playlist || this.playlist.length<=0){
              this.selectPlay({
                list:[songdetail.data.songs[0]],
                index
              })
            }else{
              this.insertSong(songdetail.data.songs[0])
            }
            
        }else if(this.type == '专辑'){
            const id = item.id
            // console.log(id);
            this.$router.push({
              path: '/home/albumdetail',
              query: { id}
            }).catch(err => { console.log(err) })
            
        }else if(this.type == '歌单'){
            // const id = item.id
            this.$router.push({
              path: '/home/playlistdetail',
              query: { id}
            }).catch(err => { console.log(err) })
        }
    },
    //根据搜索词和类型获取对应搜索数据
    async getSearch(id,offset,limit,keywords){
        const params = {
            keywords,
            limit,
            type:id,
            offset
        }
        let res = await API.getSearchList(params)
        const reslist = Object.freeze(res.data.result[this.arr]);
        switch (id) {
            case 1:
          this.songlists = reslist;
              break;
            case 10:
          this.albumlists = reslist;
              break;
            case 1000:
          this.playlistlists = reslist;
              break;
            default:
              break;
        }
    }
  },
  watch:{
    //监听路由变化更新关键词重新搜索
    $route(){
      this.keywords=this.$route.query.keywords
      this.flag = true
      this.getSearch(1,0,LIMIT,this.keywords)
    }
  },
  mounted(){
    window.addEventListener('scroll', this.handleScroll)
    this.keywords = this.$route.query.keywords
    this.getSearch(1,0,LIMIT,this.keywords)
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll)
  }
}
</script>

<style scoped lang="scss">
@import "assets/css/global.scss";

.search-list-wrapper{
  background-color: #fafafa;
}
.head-search{
  height: 247px;
  background: url('../../assets/image/bg_search.jpg');
  @include columnCenter;
  &.search-fix{
   .search-wrapper{
     width: 1130px;
     height: 67px;
     position: fixed;
     top: 0;
     border-bottom: 1px solid #dddbdb;
     box-shadow: 0 0 10px rgb(183, 183, 183 / 65%);
     .search-btn{
       width: 67px;
     }
   }   
  }
  .search-wrapper{
    width: 554px;
    height: 50px;
    padding: 0 70px 0 15px;
    background-color: #fff;
    border-radius: 3px;
    position: relative;
    transition: width .6s ease-out;
    input{
      height: 100%;
      width: 100%;
      border: none;
      outline: none;
      padding: 0;
    }
    .search-btn{
      width: 50px;
      height: 100%;
      float: right;
      position: absolute;
      top: 0;
      right: 0;
      background-color: aquamarine;
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px
    }
  }
  .hot-search{
    font-size: 14px;
    line-height: 1.5;
    color: #fff;
    margin-top: 20px;
    span{
      margin-right: 20px;
    }
  }
}
.list-info{
  max-width: 1200px;
  margin: 0 auto;
  .info-header{
      .info-header-singer{
          height: 96px;
          margin: 21px 0;
          position: relative;
          .singer-img{
              width: 96px;
              height: 96px;
            img{
                width: 100%;
                height: 100%;
            }
          }
          .singer-count{
              height: 40px;
              line-height: 40px;
              position: absolute;
              top: 0;
              left: 116px;
              span{
                  margin-right: 30px;
              }
          }
          .green-play{
              position: absolute;
              top: 45px;
              left: 116px;
          }
      }
      .info-type{
        height: 56px;
        margin-bottom: 30px;
        @include left;
        span{
            margin-right: 55px;
            &:hover{
                color: #31c27c;
                cursor: pointer;
            }
            &.type-active{
                color: #31c27c;
            }
        }
      }
      .info-btns{
          height: 38px;
          margin-bottom: 20px;
          display: flex;
      }
  }
}
.footer{
  height: 500px;
  margin-top: 100px;
  background-color: #333;
}
</style>