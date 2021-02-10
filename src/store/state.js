import {playMode} from '../utils/play'
import {getSearchList} from '../utils/canche'

const state = {
  playing:false,  //播放状态
  fullScreen:true,  //全屏
  playlist:[],  //播放列表
  sequenceList:[],  //模式下的播放列表
  mode:playMode.sequence,  //播放模式
  currentIndex:-1,  //当前歌曲在列表索引
  historySearch:getSearchList()
}

export default state