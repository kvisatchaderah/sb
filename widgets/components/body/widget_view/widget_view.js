// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds, map_actions } from '@uses'

// export
export default {
  // setup
  setup() {
    const { script } = use_store_computeds(store_name, ['script'])

    const copy_code = () => {
      navigator.clipboard.writeText(script.value)
      // TODO add succefully toast
    }
    // return
    return {
      script,
      copy_code,
      ...map_actions(store_name, ['append_script_node']),
    }
  },
}
