// store
import store from '@/store'
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'

// export
export default (path) => {
  return path
    .split('.')
    .reduce(
      (store_state, path_step) => store_state[path_step],
      store.state[store_name]
    )
}
