<template>
  <div class="btn-area">
    <template v-if="textLink">
      <a
        :href="linkUrl"
        :class="className"
        @click="btnClick"
      >
        <template v-if="btnName">
          {{ btnName }}
        </template>
        <template v-else>
          <slot />
        </template>
      </a>
    </template>
    <template v-else>
      <button
        :id="id !== '' ? id : userId"
        :type="type"
        :class="className"
        :disabled="disabled"
        @click="btnClick"
      >
        <template v-if="btnName">
          {{ btnName }}
        </template>
        <template v-else>
          <slot />
        </template>
      </button>
    </template>
  </div>
</template>

<script>
export default {
  name: 'CompBtn',
  props: {
    id: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: 'button',
      required: false
    },
    className: {
      type: String,
      default: '',
      required: false
    },
    btnName: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    textLink: {
      type: Boolean,
      default: false,
      required: false
    },
    linkUrl: {
      type: String,
      default: '',
      required: false
    }
  },
  emits: ['click'],
  data() {
    return {
      userId: ''
    }
  },
  mounted() {
    this.userId = `btn${this._uid}`
  },
  methods: {
    btnClick(e) {
      this.$emit('click', e)
    }
  }
}
</script>
<style lang="scss" scoped>
// @import '@styles/common/btn.scss';
</style>