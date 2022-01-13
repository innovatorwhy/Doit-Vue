/*
    1. 컴포넌트
    router-view 가 있는 index 페이지
    코드 스플리팅을 사용해서 동적으로 로드합니다.
*/
// 2. 라우터

import ROUTE from '@constants/route.json'

import SampleRouter from '@router/modules/sample/index.js'
import LoginRouter from '@router/modules/login/index.js'
import ExhibitionRouter from '@router/modules/exhibition/exhibitionRouter.js'
import VisitRouter from '@router/modules/visit/index.js'
import ReservationRouter from '@router/modules/reservation/index.js'
import ContactRouter from '@router/modules/contact/index.js'
import TicketRouter from '@router/modules/ticket/index.js'
import LearnRouter from '@router/modules/learn/index.js'
import MuseumRouter from '@router/modules/museum/index.js'
import MyPageRouter from '@router/modules/mypage/index.js'
import ShopRouter from '@router/modules/shop/index.js'
import EventRouter from '@router/modules/events/index.js'

const SampleIndex = () => import('@/pages/sample/index.vue')
const MainPage = () => import('@/pages/main/MainPage.vue')
const CalendarPage = () => import(/* webpackChunkName: "group-calender" */'@/pages/main/CalendarPage.vue')

const LoginPage = () => import(/* webpackChunkName: "group-login" */ '@/pages/login/LoginPage.vue')

const VisitPage = () => import(/* webpackChunkName: "group-visit" */'@/pages/visit/VisitPage.vue')
const ExhibitionPage = () => import(/* webpackChunkName: "group-exhibition" */'@/pages/exhibition/ExhibitionPage.vue')
const LearnPage = () => import(/* webpackChunkName: "group-learn" */'@/pages/learn/LearnPage.vue')
const EventPage = () => import(/* webpackChunkName: "group-event" */'@/pages/events/EventPage.vue')
const TicketPage = () => import(/* webpackChunkName: "group-ticket" */'@/pages/ticket/TicketPage.vue')
const MuseumPage = () => import(/* webpackChunkName: "group-museum" */'@/pages/museum/MuseumPage.vue')
const ShopPage = () => import(/* webpackChunkName: "group-shop" */'@/pages/shop/ShopPage.vue')

const ReservationIndex = () => import(/* webpackChunkName: "group-reservation" */ '@/pages/reservation/index.vue')
const ContactIndex = () => import('@/pages/contact/index.vue')
const MyPageIndex = () => import(/* webpackChunkName: "group-mypage" */ '@/pages/mypage/index.vue')


export default [
  {
    path: '/',
    name: ROUTE.Main,
    component: MainPage
  },
  {
    path: '/calendar',
    name: ROUTE.Calendar,
    component: CalendarPage,
    props: (route) => ({
      initDateString: route.query.date,
      initType: route.query.type
    }),
    meta: {
      keepAlive: true
    }
  },
  {
    path: '/sample',
    component: SampleIndex,
    children: SampleRouter
  },
  {
    path: '/login',
    component: LoginPage,
    children: LoginRouter
  },
  {
    path: '/exhibition',
    name: ROUTE.ExhibitionPage,
    component: ExhibitionPage,
    children: ExhibitionRouter
  },
  {
    path: '/visit',
    component: VisitPage,
    children: VisitRouter
  },

  {
    path: '/ticket',
    component: TicketPage,
    children: TicketRouter
  },

  {
    path: '/learn',
    component: LearnPage,
    children: LearnRouter
  },

  {
    path: '/events',
    component: EventPage,
    children: EventRouter
  },

  {
    path: '/reservation',
    component: ReservationIndex,
    children: ReservationRouter
  },
  {
    path: '/contact',
    component: ContactIndex,
    children: ContactRouter
  },
  {
    path: '/museum',
    component: MuseumPage,
    children: MuseumRouter
  },
  {
    path: '/mypage',
    component: MyPageIndex,
    children: MyPageRouter
  },
  {
    path: '/shop',
    component: ShopPage,
    children: ShopRouter
  }
]
