import storage from 'good-storage'

const SEARCH_KEY = '__search__'
const SEARCH_MAX_LENGTH = 10

function insertArr(arr,val,compre,maxlen){
  const index = arr.findIndex(compre)
  if(index === 0){
    return  
  }
  if(index > 0){
    arr.splice(index,1)
  }
  arr.unshift(val)
  if(maxlen && arr.length > maxlen){
    arr.pop()
  }
}

export function saveSearch(query){
  let searchs = storage.get(SEARCH_KEY,[])
  insertArr(searchs,query,(item) => {
    return item === query
  },SEARCH_MAX_LENGTH)

  storage.set(SEARCH_KEY,searchs)
  return searchs
}

export function getSearchList(){
  return storage.get(SEARCH_KEY,[])
}