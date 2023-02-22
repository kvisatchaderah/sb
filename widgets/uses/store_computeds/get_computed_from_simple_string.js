import store from '@/store'
import get_computed from './get_computed'

export default function (store_name, simple_key) {
  return get_computed(store.state[store_name], simple_key)
}
