import Vue from 'vue'
import Vuex from 'vuex'

import { module as common } from './modules/common/commonStore'
import { module as main } from './modules/main/mainStore'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    common,
    main
  }
})
