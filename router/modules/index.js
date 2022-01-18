import ROUTE from '@constants/route.json'

const MainPage = () => import(/* webpackChunkName: "group-main" */'@pages/main/MainPage.vue')

export default [
  {
    path: '/',
    name: ROUTE.Main,
    component: MainPage
  }
]
