import { createApp } from 'vue'
import App from './App.vue'
import CommonComp from '@comp/common'
import Store from '../store'
import Router from '../router'

createApp(App)
  .use(CommonComp)
  .use(Store)
  .use(Router)
  .mount('#app')
