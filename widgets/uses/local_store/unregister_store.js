// import
import store from '@/store'

export default function (store_name) {
  if (store.hasModule(store_name)) {
    store.unregisterModule(store_name)
  }
}
