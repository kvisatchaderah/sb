// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'

// libs
import { BFormCheckbox } from 'bootstrap-vue'

// export
export default {
  // props
  props: ['input'],

  // components
  components: { BFormCheckbox },

  // setup
  setup(props) {
    return use_new_widget_element(props.input)
  },
}
