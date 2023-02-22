// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'

// export
export default {
  // props
  props: ['input', 'value_path'],

  // setup
  setup(props) {
    return use_new_widget_element(props.input, props.value_path)
  },
}
