// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds, map_actions } from '@uses'
import { to_date } from '@helpers'

// export
export default {
  setup() {
    return {
      to_date,
      ...use_store_computeds(store_name, ['widgets']),
      ...map_actions(store_name, ['open_widget']),
    }
  },
}
