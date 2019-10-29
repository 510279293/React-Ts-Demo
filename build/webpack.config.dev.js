const path = require('path')
const plugins = require('./plugins')
const { resolve } = require('./utils');
const common = require('./webpack.config.js');
const merge=require('webpack-merge');//这里引入merge

module.exports = merge(common,{
  mode: 'development',
  devServer: {
    open: true,
    proxy: {
      '/clientApi': {
        target: 'http://yapi.demo.qunar.com/mock/15646/' + 'client/api/',
        changeOrigin: true,
        pathRewrite: { '^/clientApi': '' }
      }
    }
  },
})
