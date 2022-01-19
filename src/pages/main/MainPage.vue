<template>
  <CommonInput v-model:value="text" /> 
</template>

<script>
import { ModuleName as toastName } from '@store/common/toastStore'
import { ModuleName as mainName } from '@store/main/mainStore'
import { createNamespacedHelpers } from 'vuex'
const { mapGetters, mapActions } = createNamespacedHelpers(toastName)
// or
// vuex를 여러개 사용할때 아래와 같이 다르게 접근 가능
const toastStore = createNamespacedHelpers(toastName)
const mainStore = createNamespacedHelpers(mainName)

export default {
  data() {
    return {
      text: ''
    }
  },
  computed: {
    // vuex getters computed로 정의
    ...mapGetters([]),
    ...toastStore.mapGetters([]),
    ...mainStore.mapGetters(['menuList'])
  },
  watch: {
    text(val) {
      console.log('text', val)
    }
  },
  created() {
    window.test = this
    this.setMenuList(['HOME', 'MENU1', 'MENU2']) 
    console.log('menuList : ', this.menuList)
  },
  methods: {
    // vuex actions를 method로 정의
    ...mapActions([]),
    ...toastStore.mapActions([]),
    ...mainStore.mapActions(['setMenuList'])   
  }
}
</script>

<style>

</style>