const path = require('path')
const merge = require('webpack-merge')

const buildConfig = process.env.NODE_ENV === 'prd' ? require('./config/prd.config.js') : require('./config/dev.config.js')

module.exports = merge(buildConfig, {
  outputDir: 'dist',
  configureWebpack: {
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].js'
    },
    resolve: {
      alias: {
        '@': path.join(__dirname, 'src/'),
        '@pages': path.join(__dirname, 'src/pages'),
        '@store': path.join(__dirname, 'store/modules'),
        '@styles': path.join(__dirname, 'src/assets/styles'),
        '@media': path.join(__dirname, 'src/assets/media'),
        '@images': path.join(__dirname, 'src/assets/images'),
        '@utils': path.join(__dirname, 'src/utils'),
        '@assets': path.join(__dirname, 'src/assets'),
        '@bundle': path.join(__dirname, 'src/assets/bundle'),
        '@comp': path.join(__dirname, 'src/components'),
        '@constants': path.join(__dirname, 'src/constants'),
        '@mixin': path.join(__dirname, 'src/mixins'),
        '@api': path.join(__dirname, 'src/api')
      }
    }
  }
})