import { createApp } from 'vue'
import App from './App.vue'
import CommonComp from '@comp/common'

createApp(App)
  .use(CommonComp)
  .mount('#app')
