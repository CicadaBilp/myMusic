const path = require('path');//引入path模块
function resolve(dir){
    return path.join(__dirname,dir)//path.join(__dirname)设置绝对路径
}


module.exports = {
  lintOnSave: 'warning',
  chainWebpack:(config)=>{
    // config.plugins.delete('prefetch')
    config.resolve.alias
    .set('@',resolve('./src'))
    .set('assets',resolve('./src/assets'))
    .set('components',resolve('./src/components'))
    .set('views',resolve('./src/views'))

    //set第一个参数：设置的别名，第二个参数：设置的路径　　　
  },
  publicPath:process.env.NODE_ENV === 'production'
    ? './'
    : '/' 
}