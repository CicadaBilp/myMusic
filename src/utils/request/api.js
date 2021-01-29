import { get,post } from './http'

export const API = {
  //歌单推荐部分的请求
  playlistRecommend(area){
    const params = {
      limit:20,
      area,
    }
    return get('/top/playlist',params)
  }
}