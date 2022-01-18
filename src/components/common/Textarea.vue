<template>
  <div
    class="textarea"
    :style="`width: ${width}; margin: ${margin};`"
  >
    <textarea
      :id="id !== '' ? id : userId"
      v-model="internalValue"
      :style="`height: ${heiRem};`"
      :disabled="disabled"
      :readonly="readonly"
      :placeholder="placeholder"
    />
  </div>
</template>

<script>
export default {
  name: 'CompTextarea',
  props: {
    id: {
      type: String,
      default: '',
      required: false
    },
    width: {
      type: String,
      default: '100%',
      required: false
    },
    margin: {
      type: String,
      default: '1px 0',
      required: false
    },
    height: {
      type: String,
      default: 'auto',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    }
  },
  emits: ['update:value'],
  data() {
    return {
      userId: '',
      internalValue: ''
    }
  },
  computed: {
    widRem() {
      if (parseInt(this.width) > 0) {
        return this.pxToRem(this.width) + 'rem'
      } else {
        return false
      }
    },
    heiRem() {
      if (parseInt(this.height) > 0) {
        return this.pxToRem(this.height) + 'rem'
      } else {
        return false
      }
    }
  },
  watch: {
    internalValue(val) {
      this.$emit('update:value', val)
    },
    value: {
      immediate: true,
      handler(val) {
        this.internalValue = val
      }
    }
  },
  mounted() {
    console.log('internalValue')
    this.userId = `text${this._uid}`
  }
}
</script>

<style lang="scss" scoped>
// @import '@styles/common/textarea.scss';
</style>

