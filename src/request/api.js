import { get,post } from './http'

export const API = {
  //歌单推荐部分的请求
  playlistRecommend(cat){
    const params = {
      limit:20,
      cat,
    }
    return get('/top/playlist',params)
  },
  //新歌速递的请求
  getNewSong(type){
    return get('/top/song',{ type })
  },
  //精彩推荐(banner)的请求
  getWonderHot(){
    return get('/banner')
  },
  //获取新碟数据
  getNewDisc(area){
    const params = {
      limit:40,
      area
    }
    return get('/album/new', params)
  },
  //获取四个榜单内容摘要
  getTopList(){
    return get('/toplist/detail')
  },
  getMvList(area){
    const params = {
      limit:40,
      area
    }
    return get('/mv/all',params)
  },
  getSearchList(params){
    return get('/search',params)
  },
  //歌单详情
  getPlaylistDetail(id){
    return get('/playlist/detail',{ id })
  },
  //专辑详情
  getAlbumDetail(id){
    return get('/album',{id})
  },
  //获取歌曲详情
  getSongDetail(ids){
    return get('/song/detail',{ids})
  },
  //获取音乐详情(播放连接)
  getMusicDetail(id){
    return get('/song/url',{id})
  },
  //获取音乐是否可听
  getMusicAble(id){
    return get('/check/music',{id})
  },
  //获取歌曲歌词
  getLyric(id){
    return get('/lyric',{id})
  },
  //获取热搜列表
  getHotSearchList(){
    return get('/search/hot/detail')
  },
  //传入搜索关键词获取搜索建议
  getSearchSuggest(keywords){
    return get('/search/suggest',{keywords})
  },
  getSimilarPlaylist(id){
    return get('/related/playlist',{id})
  }
}


