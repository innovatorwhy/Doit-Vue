// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin

module.exports = {
  productionSourceMap: true,
  lintOnSave: true,  
  configureWebpack: {
    // plugins: [new BundleAnalyzerPlugin()]
  },
  css: {
    sourceMap: true
  }
}