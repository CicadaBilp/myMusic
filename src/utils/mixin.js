import {mapActions,mapGetters} from 'vuex'


//处理毫秒和秒
export const timeMixin = {
  methods:{
    //秒
    formatCurrentTime(time) {
      time = Math.floor(time)
      const minute = this.pad(Math.floor(time / 60))
      const second = this.pad(time % 60)
      return `${minute} : ${second}`
    },
    //毫秒
    formatPlayTime(time) {
      time = Math.floor(time / 1000)
      const minute = this.pad(Math.floor(time / 60))
      const second = this.pad(time % 60)
      return `${minute} : ${second}`
    },
    pad(num,n = 2){
      let len = num.toString().length
      while(len < n){
        num = '0' + num
        len++
      }
      return num
    } 
    
  }
}

export const playSong = {
  computed:{
    ...mapGetters(['playlist'])
  },
  methods:{
    ...mapActions(['selectPlay','insertSong']),
    //歌单详情或专辑详情中点击歌曲列表某歌曲
    select(item){
      // console.log(item);
      if(!this.playlist || this.playlist.length<=0){
        this.selectPlay({
          list:[item]
        })
      }else{
        this.insertSong(item)
      }
    }
  }
}