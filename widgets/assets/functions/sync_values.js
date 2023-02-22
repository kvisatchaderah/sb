// assets
import { get_store_state } from './_functions'
const requered_keys = ['value', 'prefix', 'postfix', 'unprefix']

// sync_values
const sync_values = (input_value_path, target_value_path, key) => {
  // wrapper function
  return () => {
    if (key) {
      get_store_state(target_value_path)[key] =
        get_store_state(input_value_path)[key]
    }

    requered_keys.forEach((requered_key) => {
      if (get_store_state(input_value_path)[requered_key] !== undefined) {
        get_store_state(target_value_path)[requered_key] =
          get_store_state(input_value_path)[requered_key]
      }
    })
  }
}

// export
export default sync_values
