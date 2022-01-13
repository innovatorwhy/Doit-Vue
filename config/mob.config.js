const path = require('path')

module.exports = {
  /* chainWebpack: (config) => {
    config.plugins.delete('prefetch')
    config.plugins.delete('prefetch-index')
  }, */
  configureWebpack: {
    // plugins: (process.env.NODE_ENV === 'production') ? [...productionPlugins] : [],
    // 1. 절대 경로
    // resolve.alias는 모듈을 더 쉽게 import, require 하게 만듭니다.
    resolve: {
      alias: {
        '@router': path.join(__dirname, '../router'),
        '@pages': path.join(__dirname, '../src/pages')
      }
    }
  },
  pages: {
    index: {
      // entry for the page
      entry: 'src/main.mobile.js',
      // the source template
      template: 'public/mobile.html',
      // output as dist/index.html
      filename: 'index.html',
      // when using title option,
      // template title tag needs to be <title><%= htmlWebpackPlugin.options.title %></title>
      title: 'Daerim Museum Mobile',
      // chunks to include on this page, by default includes
      // extracted common chunks and vendor chunks.
      chunks: ['chunk-vendors', 'chunk-common', 'index']
    }
  }
}