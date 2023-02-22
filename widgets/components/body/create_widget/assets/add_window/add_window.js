// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'

// libs
import { BButton } from 'bootstrap-vue'

// export
export default {
  // props
  props: ['target', 'push_value'],

  // components
  components: { BButton },

  // setup
  setup(props) {
    const { target } = use_store_computeds(store_name, {
      target: props.target,
    })

    const add_window = () => {
      target.value.push(props.push_value)
    }

    return {
      add_window,
    }
  },
}
