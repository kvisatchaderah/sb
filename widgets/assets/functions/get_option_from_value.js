import { type_is } from '@helpers'

// get_option_from_value
const get_option_from_value = (value, options) => {
  if (!type_is(options, 'array')) return false

  return options.reduce((result, option) => {
    if (result) return result
    if (value === option.value) return option
    return false
  }, false)
}

// export
export default get_option_from_value
