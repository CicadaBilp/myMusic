import * as types from './mutation-type'
import {saveSearch} from '../utils/canche'

function findIndex(list,song){
  return list.findIndex((item) => {
    return item.id === song.id
  })
}


//开启播放全屏,设置播放列表playlist和原始列表sequencelist
export const selectPlay = function({commit,state},{list,index}) {
  commit(types.SET_SEQUENCE_LIST,list)
  commit(types.SET_PLAYLIST,list)
  // commit(types.SET_CURRENT_INDEX,index)
  commit(types.SET_FULL_SCREEN,true)
  // commit(types.SET_PLAYING_STATUS,true)
}

//向播放列表中添加一首歌曲
export const insertSong = function({commit,state},song){
  let playlist = state.playlist.slice()
  let sequenceList = state.sequenceList.slice()
  let currentIndex = state.currentIndex
  //记录当前歌曲
  let currentSong = playlist[currentIndex]
  //查找当前列表中是否有要插入的这个歌曲
  let fpindex = findIndex(playlist,song)
  //插入了歌曲所以当前歌曲索引要加1
  currentIndex++
  //将这个歌添加到播放歌曲的后一位
  playlist.splice(currentIndex,0,song)
  //如果已经包含了这首歌
  if(fpindex > -1){
    //插入歌曲
    if(currentIndex > fpindex){
      playlist.splice(fpindex,1)
      currentIndex--
    }else{
      playlist.splice(fpindex+1,1)
    }
  }

  let currentSIndex = findIndex(sequenceList,currentSong) + 1
  let fsIndex = findIndex(sequenceList,song)

  sequenceList.splice(currentSIndex,0,song)

  if(fsIndex > -1){
    if(currentIndex > fsIndex){
      sequenceList.splice(fsIndex,1)
    }else{
      sequenceList.splice(fsIndex+1,1)
    }
  }

  commit(types.SET_SEQUENCE_LIST,sequenceList)
  commit(types.SET_PLAYLIST,playlist)
  commit(types.SET_FULL_SCREEN,true)
  commit(types.SET_CURRENT_INDEX,currentIndex)
  commit(types.SET_PLAYING_STATUS,true)
}

export const saveHistorySearch = ({commit},query) => {
  commit(types.SET_HISTORY_SEARCH,saveSearch(query))
}









