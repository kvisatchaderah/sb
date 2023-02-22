// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'

// assets
import { colors } from '@/views/apps/crm/widgets/assets/views/_settings'

// export
export default {
  // props
  props: ['input', 'value_path'],

  // setup
  setup(props) {
    return {
      colors,
      ...use_store_computeds(store_name, ['icon_size']),
      ...use_new_widget_element(props.input, props.value_path),
    }
  },
}
