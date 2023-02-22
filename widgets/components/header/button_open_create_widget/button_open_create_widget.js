// use
import { use_store_computeds, map_actions } from '@uses'

// store
import { mapActions } from 'vuex'
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'

// export
export default {
  // setup
  setup() {
    // return
    return {
      // computeds
      ...use_store_computeds(store_name, ['icon_size']),

      // mapActions
      ...map_actions(store_name, ['open_new_widget']),
    }
  },
}
