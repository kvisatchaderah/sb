// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds, map_actions } from '@uses'

// export
export default {
  // props
  props: {
    without_hr: {
      type: Boolean,
      default: false,
    },
  },

  // setup
  setup() {
    return {
      ...use_store_computeds(store_name, {
        active_step: 'new_widget.vue.active_step',
        steps_length: 'steps.length',
      }),
      ...map_actions(store_name, { submit: 'submit_new_widget' }),
    }
  },
}
