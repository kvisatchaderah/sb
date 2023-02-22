// libs
import { onUnmounted } from '@vue/composition-api'

// assets
import register_store from './register_store'
import unregister_store from './unregister_store'

// export
export default function (store_name, store_module) {
  register_store(store_name, store_module)

  onUnmounted(() => {
    unregister_store(store_name)
  })
}
