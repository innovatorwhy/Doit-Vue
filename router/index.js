import Vue from 'vue'
import Router from 'vue-router'

import { setNaviagation } from './navigation'

import WebRouter from './modules/index.js'
import MobRouter from './mob/index.js'

import store from '*/store/index.js'
import ROUTE from '@constants/route.json'
window.ROUTE = ROUTE

Vue.use(Router)
console.log('process.env.NODE_ENV', process.env.NODE_ENV)

const router = new Router({
  mode: 'history',
  scrollBehavior(to, from, savedPosition) { 
    if (savedPosition) {
      return savedPosition
    } else{
      return { x: 0, y: 0 }
    }
  },
  routes: process.env.NODE_ENV.indexOf('MOB') >= 0 ? MobRouter : WebRouter
})

setNaviagation(router)

router.beforeEach((to, from, next) => {
  store.commit('common/gnb/setGnbOn', (to.path).split('/')[1].toUpperCase())
  store.commit('common/gnb/setIsLogin', !!localStorage.getItem('userToken'))

  // GNB 카테고리 목록 조회
  store.dispatch('common/gnb/searchGnbCategoryList')

  // 라우터 이동 전에 권한 및 유효성 체크
  store.dispatch('common/gnb/hasAuth', to).then((redirectInfo) => {
    if(redirectInfo.path === null) {
      next()
    }else{
      next(redirectInfo)
    }
  })
})


export default router