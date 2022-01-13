import Vue from 'vue'
import Vuex from 'vuex'

import { module as common } from './modules/common/commonStore'
import { module as main } from './modules/main/mainStore'
import postStore from './modules/postStore'
import userStore from './modules/userStore'
import browserStore from './modules/browserStore'
import reservationStore from './modules/reservationStore'

import { module as exhibitionStore } from './modules/exhibition/exhibitionStore'
import { module as navigationStore } from './modules/common/navigationStore'
import { module as ticketStore } from './modules/ticket/ticketStore'
import { module as cancelStore } from './modules/order/cancelStore'
import { module as mypage } from './modules/mypage/mypageStore'
import { module as learnStore } from './modules/learn/learnStore'
import { module as visitStore } from './modules/visit/visitStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    main,
    postStore,
    userStore,
    browserStore,
    navigationStore,
    exhibitionStore,
    reservationStore,
    ticketStore,
    cancelStore,
    mypage,
    learnStore,
    visitStore
  }
})
