import { send, i18n } from 'eop-vue-core'
import { CommonStack } from '@/util/stackController'
import Confirm from '@comp/common/DConfirm'
import { getAppInfo } from '@/mobile'
import Vue from 'vue'

let isShowVersionConfirm = false

export const checkVersion = () => {
  if (isShowVersionConfirm) return
  getAppInfo()
    .then(info => {
      if (info) {
        return send('SSF-GET-/support/app/{appId}/version/{verId}', [info.appId, info.verId], null, { params: { osTypCd: info.osTypCd } })
      }
    })
    .then((result) => {
      if (result.data.verStatCd === 'CONFIRM' || result.data.verStatCd === 'EXPIRED') {
        showVersionConfirm(result.data.verStatCd === 'EXPIRED', () => {
          window.fdpbridge.exec('moveInstalPage', result.data.lnkUrl)
          isShowVersionConfirm = false
        })
      }
    })
}

const showVersionConfirm = (isMust, listener) => {
  isShowVersionConfirm = true
  const ConfirmConstructor = Vue.extend(Confirm)
  const options = {}
  options.title = i18n.t('ssf.app.info.update.lbl')
  options.content = i18n.t('ssf.app.info.update.msg')
  options.okLabel = i18n.t('system.common.confirm.lbl')
  options.cancelLabel = i18n.t('system.common.cancel.lbl')
  options.isConfirm = !isMust
  options.isShowCancel = !isMust
  options.okClickListener = listener
  const popupInstance = new ConfirmConstructor({
    data: options
  })
  popupInstance.vm = popupInstance.$mount()
  document.body.appendChild(popupInstance.vm.$el)
  !isMust && CommonStack.push(popupInstance.vm)
}
