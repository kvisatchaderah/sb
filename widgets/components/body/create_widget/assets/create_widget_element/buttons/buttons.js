// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'

// libs
import { BButton } from 'bootstrap-vue'

// export
export default {
  // props
  props: ['input', 'value_path'],

  // components
  components: { BButton },

  // setup
  setup(props) {
    return use_new_widget_element(props.input, props.value_path)
  },
}
