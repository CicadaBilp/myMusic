

export const timeMixin = {
  methods:{
    formatCurrentTime(time) {
      time = Math.floor(time)
      const minute = this.pad(Math.floor(time / 60))
      const second = this.pad(time % 60)
      return `${minute} : ${second}`
    },
    
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