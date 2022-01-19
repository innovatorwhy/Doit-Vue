<template>
  <div>
    <input
      :id="id !== '' ? id : userId"
      v-model="internalValue"
      :type="type"
      :class="{'error': errorMsg && errorMsg.length > 0}"
      :placeholder="placeholder"
      :disabled="disabled"
      :readonly="readonly"
    >
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
  props: {
    type: {
      type: String,
      default: 'text',
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
  emits: ['update:value'],
  data() {
    return {
      userId: '',
      internalValue: ''
    }
  },
  computed: {
    error() {
      return this.errorMsg && this.errorMsg.length > 0
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