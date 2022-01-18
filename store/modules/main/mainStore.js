const ModuleName = 'main'
const module = {
  namespaced: true,
  state: {
    menuList: []
  },
  getters: {
    menuList (state) {
      return state.menuList
    }
  },
  actions: {
    setMenuList ({ commit, state }, menuList) {
      commit('setMenuList', menuList)
    }
  },
  mutations: {
    // 화면에 노출될 GNB 카테고리 저장
    setMenuList(state, menuList) {
      state.menuList = menuList
    }
  }
}

export {
  module,
  ModuleName
}
