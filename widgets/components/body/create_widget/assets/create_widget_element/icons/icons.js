// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'

// assets
import { icons } from '@/views/apps/crm/widgets/assets/views/_settings'

// export
export default {
  // props
  props: ['input', 'value_path'],

  // setup
  setup(props) {
    return {
      icons,
      ...use_store_computeds(store_name, ['icon_size']),
      ...use_new_widget_element(props.input, props.value_path),
    }
  },
}
