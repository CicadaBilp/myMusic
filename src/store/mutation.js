import * as types from './mutation-type'

const mutations = {
  [types.SET_PLAYING_STATUS](state, status) {
    state.playing = status
  },
  [types.SET_FULL_SCREEN](state, status) {
    state.fullScreen = status
  },
  [types.SET_PLAYLIST](state,list) {
    state.playlist = list
  },
  [types.SET_SEQUENCE_LIST](state,list) {
    state.sequenceList = list
  },
  [types.SET_PLAY_MODE](state, mode) {
    state.mode = mode
  },
  [types.SET_CURRENT_INDEX](state, index) {
    state.currentIndex = index
  }

}

export default mutations