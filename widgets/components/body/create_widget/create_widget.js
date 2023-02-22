// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'

// steps
import Special from './steps/special/special.vue'
import Views from './steps/views/views.vue'
import Styles from './steps/styles/styles.vue'

// libs
import { BAvatar } from 'bootstrap-vue'

// export
export default {
  // components
  components: {
    // steps
    Special,
    Views,
    Styles,

    // libs
    BAvatar,
  },

  // setup
  setup() {
    //
    // active step
    //

    const { active_step } = use_store_computeds(store_name, {
      active_step: 'new_widget.vue.active_step',
    })

    const change_active_step = (step_index) => {
      active_step.value = step_index
    }

    const step_actived = (step_index) => {
      return step_index == active_step.value
    }

    // return
    return {
      // computeds
      active_step,
      ...use_store_computeds(store_name, ['icon_size', 'steps']),

      // methods
      change_active_step,
      step_actived,
    }
  },
}
