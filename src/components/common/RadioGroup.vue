<template>
  <div>
    <comp-radio
      v-for="(item) in comItems"
      :id="item.id"
      :key="item.id"
      :value="item.value"
      :label="item.label"
      :checked="item.checked"
      :name="name"
      :disabled="disabled"
      @change="setComInternalValue"
    />
  </div>
</template>

<script>
export default {
  name: 'CompRadioGroup',
  props: {
    value: {
      type: [String, Object, Number],
      default: null,
      required: false
    },
    itemLabel: {
      type: String,
      default: ''
    },
    itemValue: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      default: () => []
    },
    selected: {
      type: [String, Number, Object],
      default: null
    },
    name: {
      type: String,
      default: '',
      required: true
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      internalValue: null
    }
  },
  computed: {
    comItems() {
      return this.items.map((item, index) => {
        return {
          value: typeof this.itemValue === 'string' && this.itemValue.length > 0 ? item?.[this.itemValue] : item,
          label: typeof this.itemLabel === 'string' && this.itemLabel.length > 0 ? item?.[this.itemLabel] : item,
          checked: (item?.[this.itemValue] === this.selected || item === this.selected),
          id: item.id ? item.id : index
        }
      })
    },
    comInternalValue: {
      get() {
        return this.internalValue
      },
      set(val) {
        this.internalValue = val
        this.$emit('input', val)
      }            
    }           
  },
  mounted() {
    this.setComInternalValue(this.selected)
  },    
  methods: {
    setComInternalValue(val) {
      this.comInternalValue = val
    }
  }
}
</script>

