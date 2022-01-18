const ModuleName = 'common/toast'
const module = {
  namespaced: true,
  state: {
    visible: false,
    dangerouslyUseHTMLString: false,
    message: '',
    timer: null,
    duration: 2000,
    onClose: null
  },
  actions: {
    showToast ({ state }, option) {
      state.message = ''
      state.onClose = null
      state.visible = true
      if(typeof option === 'object') {
        state.message = option.message
        if (typeof option.onClose === 'function') {
          state.onClose = option.onClose
        }
      }else{
        state.message = option
      }
      state.timer = setTimeout(() => {
        module.actions.hideToast({ state: state })
      }, state.duration)
    },
    hideToast({ state }) {
      clearTimeout(state.timer)
      state.visible = false
      state.onClose && (typeof state.onClose === 'function') && state.onClose()
    }
  }
}

export {
  module,
  ModuleName
}
