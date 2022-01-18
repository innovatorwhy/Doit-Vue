<template>
  <div
    class="input-area"
    :style="`width: ${widRem}; margin: ${margin};`"
  >
    <input
      :id="id !== '' ? id : userId"
      v-model="internalValue"
      :type="type"
      :class="{'error': errorMsg && errorMsg.length > 0}"
      :style="`padding: ${padding};`"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
      @blur="$emit('onBlur', arguments[0])"
      @focus="$emit('onFocus', arguments[0])"
      @keydown="$emit('onKeydown', arguments[0])"
      @keypress="$emit('onKeypress', arguments[0])"
      @input="$emit('onInput', arguments[0])"
      @keyup="$emit('onKeyup', arguments[0])"
    >
    <span
      v-if="unit"
      class="unit"
    >{{ unit }}</span>
    <p
      v-if="error"
      class="error-msg"
    >
      {{ errorMsg }}
    </p>
  </div>
</template>

<script>
export default {
  name: 'CompField',
  props: {
    width: {
      type: String,
      default: '',
      required: false
    },
    margin: {
      type: String,
      default: '',
      required: false
    },
    padding: {
      type: String,
      default: '',
      required: false
    },
    type: {
      type: String,
      default: 'text',
      required: false
    },
    unit: {
      type: String,
      default: '',
      required: false
    },
    placeholder: {
      type: String,
      default: '',
      required: false
    },
    id: {
      type: String,
      default: '',
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    readonly: {
      type: Boolean,
      default: false,
      required: false
    },
    errorMsg: {
      type: String,
      default: '',
      required: false
    }
  },
  emits: ['onBlur', 'onFocus', 'onKeydown', 'onKeypress', 'onInput', 'onKeyup', 'update:value'],
  data() {
    return {
      userId: '',
      internalValue: ''
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
    },
    widRem() {
      if (parseInt(this.width) > 0) {
        return this.pxToRem(this.width) + 'rem'
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
    this.userId = `field${this._uid}`
  }
}
</script>

<style lang="scss" scoped>
// @import '@styles/common/field.scss';
</style>


