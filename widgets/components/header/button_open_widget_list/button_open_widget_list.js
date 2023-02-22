// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds, map_actions } from '@uses'

// export
export default {
  // setup
  setup() {
    // return
    return {
      // computeds
      ...use_store_computeds(store_name, ['icon_size']),
      // mapActions
      ...map_actions(store_name, ['open_widgets_list']),
    }
  },
}
