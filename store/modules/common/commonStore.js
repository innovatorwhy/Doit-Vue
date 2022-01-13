import { module as gnb } from './gnbStore'
import { module as toast } from './toastStore'
import { module as commCdStore } from './commCdStore'

const ModuleName = 'common'
const module = {
  namespaced: true,
  modules: {
    gnb,
    toast,
    commCdStore
  }
}

export {
  module,
  ModuleName
}