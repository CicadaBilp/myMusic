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

//打乱数组
export function shuffle(arr){
  for(let i = 0; i < arr.length; i++){
    let j = getRandom(0,i)
    let t = arr[i]
    arr[i] = arr[j]
    arr[j] = t
  }
  return arr
}



//处理播放数量
export function tranNumber(count,point){
  let numStr = count.toString().split('.')[0]
  
  if(numStr.length < 5){
    return numStr
  }else if(numStr.length >= 5 && numStr.length <= 8){
    let decimal = numStr.substring(numStr.length -4, numStr.length - 4 + point )
    return parseFloat(parseInt(count / 10000) + '.' + decimal) + '万'
  }else if(numStr.length > 8){
    let decimal = numStr.substring(numStr.length - 8, numStr.length - 8 + point)
    return parseFloat(parseInt(count / 100000000) + '.' + decimal) + '亿'
  }
}

//查找歌曲在列表中的索引
export function findIndex(list,song){
  return list.findIndex((item) => {
    return item.id === song.id
  })
}





