// assets
import { get_store_state, get_option_from_value } from './_functions'

// set_options
const set_options = (target, options) => {
  // wrapper function
  return () => {
    const target_value = get_store_state(target)

    if (!get_option_from_value(target_value.value, options)) {
      // change_options
      target_value.options = options
      target_value.value = options[0].value
    }
  }
}

// export
export default set_options
