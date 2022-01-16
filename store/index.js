import { createStore, createNamespacedHelpers } from 'vuex'

import { module as common } from './modules/common/commonStore'
import { module as main } from './modules/main/mainStore'


import { TYPES, ModuleName } from '@store/exhibition/exhibitionStore'


export default createStore({
  modules: {
    common,
    main
  }
})
const exhibitionStore = createNamespacedHelpers(ModuleName)