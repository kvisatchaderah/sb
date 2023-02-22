// store
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'

// use
import { use_store_computeds } from '@uses'

// export
export default {
  // props
  props: ['component_name'],

  // setup
  setup(props) {
    const { steps } = use_store_computeds(store_name, ['steps'])
    const step = steps.value.find(
      (step) => step.component_name == props.component_name
    )

    // return
    return {
      step,
    }
  },
}
