import { createStore } from 'vuex'

import { module as common } from './modules/common'
import { module as main } from './modules/main/mainStore'


export default createStore({
  modules: {
    common,
    main
  }
})