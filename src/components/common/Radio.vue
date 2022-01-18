<template>
  <div class="radio-area">
    <input
      :id="id !== '' ? id : userId"
      type="radio"
      :name="name"
      :disabled="disabled"
      :checked="checked"
      :value="value"
      @click="radioClick($event)"
    >
    <label :for="id !== '' ? id : userId">
      <span class="check" />
      {{ label }}
      <span
        v-if="remainder"
        class="remainder"
      >잔여: {{ remainder }}</span>
    </label>
  </div>
</template>

<script>
export default {
  name: 'CompRadio',
  props: {
    id: {
      type: String,
      default: '',
      required: false
    },
    name: {
      type: String,
      default: '',
      required: false
    },
    disabled: {
      type: Boolean,
      default: false,
      required: false
    },
    label: {
      type: String,
      default: '',
      required: false
    },
    checked: {
      type: Boolean,
      default: false,
      required: false
    },
    value: {
      type: String,
      default: '',
      required: false
    },
    remainder: {
      type: String,
      default: '',
      required: false
    }
  },
  emits: ['radio-click'],
  data() {
    return {
      check: this.checked,
      userId: ''
    }
  },
  mounted() {
    if (this.check) {
      this.$el.querySelector('input').checked = true
    }
    this.userId = `radio${this._uid}`
  },
  methods: {
    radioClick(e) {
      this.$emit('radio-click', e)
    }
  }
}
</script>

<style lang="scss" scoped>
//@import '@styles/common/radio.scss';
</style>
