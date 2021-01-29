import axios from 'axios'

const myAxios = axios.create({    //创建axios实例，在这里可以设置请求的默认配置
  timeout: 10000, // 设置超时时间10s
  baseURL: process.env.VUE_APP_BASE_URL   //根据自己配置的反向代理去设置不同环境的baeUrl
})
console.log(process.env.VUE_APP_BASE_URL);

// 文档中的统一设置post请求头。下面会说到post请求的几种'Content-Type'
// instance.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'

/* 添加请求拦截器 */


/**添加响应拦截器 */


/* 统一的get请求 */ 
export const get = (url, params, config = {}) => {
  return new Promise((resolve, reject) => {
    myAxios({
      method: 'get',
      url,
      params,
      ...config
    })
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}

/**统一的post请求 */
export const post = (url, data, config = {}) => {
  return new Promise((resolve, reject) => {
    myAxios({
      method: 'post',
      url,
      data,
      ...config
    })
    .then(response => {
      resolve(response)
    })
    .catch(error => {
      reject(error)
    })
  })
}
