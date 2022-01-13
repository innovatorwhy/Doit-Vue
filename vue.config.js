const path = require('path')
const merge = require('webpack-merge')

const buildConfig = process.env.NODE_ENV === 'prd' ? require('./config/prd.config.js') : require('./config/dev.config.js')
const deviceConfig = process.env.MOBILE ? require('./config/mob.config.js') : require('./config/web.config.js')

if(process.env.MOBILE) {
  process.env.NODE_ENV += '_MOB'
  console.log('Mobile Env')
} 

module.exports = merge(buildConfig, deviceConfig, {
  outputDir: 'dist',
  configureWebpack: {
    output: {
      filename: 'js/[name].[hash].js',
      chunkFilename: 'js/[id].[hash].js'
    },
    resolve: {
      alias: {
        '*': path.join(__dirname, '/'),
        '@': path.join(__dirname, 'src/'),
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
  },  
  css: {
    loaderOptions: {
      sass: {
        data: '@import "src/assets/styles/_mixin.scss";'
      }
    }
  },
  devServer: {
    historyApiFallback: true,
    port: process.env.VUE_APP_DEV_SERVER_PORT || 5000,
    proxy: {
      '/api/v1': {
        target: process.env.VUE_APP_BASE_URL
      }
    }
  }
})