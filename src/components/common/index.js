import Field from './Field.vue'
import Button from './Btn.vue'
import Check from './Check.vue'
import Select from './Select.vue'
import Radio from './Radio.vue'
import Textarea from './Textarea.vue'

const components = [
  Field,
  Button,
  Check,
  Select,
  Radio,
  Textarea
]

const DComp = {
  install(Vue) {
    components.map(component => {
      return Vue.component(component.name, component)
    })
  }
}

export default DComp