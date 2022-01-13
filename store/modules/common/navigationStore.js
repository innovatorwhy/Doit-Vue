const MAX = 5
const ModuleName = 'navigationStore'
const module = {
  namespaced: true,
  state: {
    stack: [],
    popupStack: [],
    childName: '',
    isBackWard: false
  },
  getters: {
    currentStack (state) {
      return state.stack.length > 0 ? state.stack[state.stack.length - 1] : ''
    },
    preStack (state) {
      return state.stack.length > 1 ? state.stack[state.stack.length - 2] : ''
    },
    stack (state) {
      return state.stack
    },
    childName (state) {
      return state.childName
    },
    currentItem (state) {
      return getLast(state)
    },
    size (state) {
      return state.stack ? state.stack.length : 0
    },
    currentPopup (state) {
      return state.popupStack.length > 0 ? state.popupStack[state.popupStack.length - 1] : null
    }
  },
  actions: {
    __push ({ commit, state }, payload) {
      commit('push', payload)
    },
    __back ({ commit, state }, payload) {
      commit('back', payload)
    },
    __clear ({ commit, state }) {
      commit('clear')
    },

    __pushPopup ({ commit, state }, payload) {
      commit('pushPopup', payload)
    },
    __removePopup ({ commit, state }) {
      commit('removePopup')
    },
    __clearPopup ({ commit, state }, payload) {
      commit('clearPopup', payload)
    }

  },
  mutations: {
    push (state, payload) {
      if(!state.stack.find(el => el === payload)) {
        state.childName = payload
        state.stack.length >= MAX && state.stack.shift()  
        state.stack.push(payload)
      }
    },
    updateStack (state, payload) {
      for (const key in payload) {
        // if (payload.hasOwnProperty(key)) {
        state.stack.length > 0 && (state.stack[state.stack.length - 1][key] = payload[key])
        // }
      }
    },
    back (state, payload) {
      state.stack.splice(state.stack.findIndex(el => el === payload), 1)
    },
    clear (state) {
      state.isBackWard = true
      state.stack = []
      state.childName = ''
    },
    isback(state, payload) {
      state.isBackWard = payload
    },
    pushPopup (state, payload) {
      if(!state.popupStack.find(el => el === payload)) {
        state.popupStack.push(payload)
      }
    },
    removePopup(state, payload) {
      state.popupStack.pop()
    },
    clearPopup(state, payload) {
      state.popupStack = []
    }
  }
}

const getLast = (state) => {
  return state.stack.length > 0 ? state.stack[state.stack.length - 1] : null
}

export {
  module,
  ModuleName
}
