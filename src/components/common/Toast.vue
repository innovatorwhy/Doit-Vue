<template>
  <transition name="el-message-fade">
    <div
      v-if="visible"
      style="z-index:9999;"
      :class="[
        'el-message',
        true ? 'is-center' : '',
        true ? 'is-closable' : ''
      ]"
      role="alert"
    >
      <p
        v-if="!dangerouslyUseHTMLString"
        class="el-message__content"
      >
        {{ message }}
      </p>
      <p
        v-else
        class="el-message__content"
        v-html="message"
      />
      <i
        v-if="true"
        class="el-message__closeBtn el-icon-close"
        @click="close"
      />
    </div>
  </transition>
</template>

<script>
import { createNamespacedHelpers } from 'vuex'
import { ModuleName } from '@store/common/toastStore'
const toastStore = createNamespacedHelpers(ModuleName)

export default {
  name: 'Toast',
  data () {
    return {
    }
  },
  computed: {
    ...toastStore.mapState(['visible', 'dangerouslyUseHTMLString', 'message']),
    // 헤더노출 구분 : 메인, 대림문화재단
    isMainPage() {
      return !this.$route.path.startsWith('/museum')
    } 
  },
  mounted() {
    document.addEventListener('keydown', this.keydown)
  },
  beforeUnmount() {
    document.removeEventListener('keydown', this.keydown)
  },
  methods: {
    setMobile() {
      window.onpopstate = (event) => {
      // To-Do : PC웹 인지 모바일웹인지 체크해서 모바일 웹일때만 동작하도록 처리 필요
      // popup, toast 가 있다면
        if(this.currentStack.name === 'popup' || this.currentStack.name === 'toast') {
          this.currentStack.vm.$destroy()
          // 다시 처음으로
          history.forward()
        }
      }
    },
    ...toastStore.mapActions(['hideToast']),
    keydown(e) {
      if (e.keyCode === 27) { // esc
        this.close()
      }
    },
    close() {
      this.hideToast()
    }
  }
}
</script>