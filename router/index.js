import { createRouter, createWebHashHistory } from 'vue-router'
import routes from './modules/index.js'

const router = createRouter({
  history: createWebHashHistory(),
  routes: routes
})


export default router