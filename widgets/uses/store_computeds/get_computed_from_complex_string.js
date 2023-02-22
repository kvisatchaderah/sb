import store from '@/store'
import get_computed from './get_computed'

export default function (store_name, complex_key) {
  // split complex_key
  const simple_keys = complex_key.split('.')
  const last_simple_key = simple_keys[simple_keys.length - 1]

  // create store_prelast_value
  let store_prelast_value = store.state[store_name]
  for (let i = 0; i < simple_keys.length - 1; i++) {
    store_prelast_value = store_prelast_value[simple_keys[i]]
  }

  // get_computed
  return get_computed(store_prelast_value, last_simple_key)
}
