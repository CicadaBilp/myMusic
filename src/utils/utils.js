//一维数组转二维数组方法

export const arrChange = (arr,num) => {
  const newArr = []
  arr.forEach((item,index) => {
    const page = Math.floor(index / num)
    if(!newArr[page]){
      newArr[page] = []
    }
    newArr[page].push(item)
  })

  return newArr
}

//生成随机数
function getRandom(min,max){
  return Math.floor(Math.random() * (max-min+1) + min)
}

export function shuffle(arr){
  for(let i = 0; i < arr.length; i++){
    let j = getRandom(0,i)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }

  return arr
}

class Lyric {
  constructor(data){
    this.data = data
    this.lrc = data['lrc']['lyric']
    this.tlyric = data['tlyric']['lyric']

    this.lrcMap = this.getLyricMap(this.lrc)
    

    this.tlyricMap = this.getLyricMap(this.tlyric)


  }

  getLyricMap(lrc){
    let key,value,sIdx,eIdx,nsIdx;
    let ret = {}

    if(!lrc || (typeof lrc !== 'string')) return ret

    while(lrc){
      sIdx = lrc.indexOf('[')
      eIdx = lrc.indexOf(']') + 1
      if(sIdx !== -1 && eIdx !== -1){
        key = lrc.slice(sIdx,eIdx)
        advance(eIdx)
        nsIdx = lrc.indexOf('[')
        value = lrc.slice(0,nsIdx)
        ret[key] = value.trim()
      }else{
        break
      }
    }
    function advance(n){
      lrc = lrc.substring(n)
    }
    return ret
  }






}