// store
import store from '@/store'
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'

// assets
import { sync_values } from './_functions'

// sync_values
const sync_widget_positions = () => {
  const sync_funcs = [
    sync_values(
      'new_widget.modifiers.widget_side',
      'new_widget.modifiers.widget_button_side'
    ),
    sync_values(
      'new_widget.modifiers.widget_position',
      'new_widget.modifiers.widget_button_position'
    ),
    sync_values(
      'new_widget.modifiers.widget_position.variants',
      'new_widget.modifiers.widget_button_position.variants'
    ),
    sync_values(
      'new_widget.modifiers.widget_position.variants',
      'new_widget.modifiers.widget_button_position.variants',
      'options'
    ),
    sync_values(
      'new_widget.modifiers.widget_position.hand_value',
      'new_widget.modifiers.widget_button_position.hand_value'
    ),
  ]

  return () => {
    if (store.state[store_name].new_widget.vue.widget_sync.value) {
      sync_funcs.forEach((f) => f())
    }
  }
}

// export
export default sync_widget_positions
