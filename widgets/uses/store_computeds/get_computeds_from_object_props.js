import get_computed_from_complex_string from './get_computed_from_complex_string'
import get_computed_from_simple_string from './get_computed_from_simple_string'

export default function (store_name, object_props) {
  let result = {}

  for (const key in object_props) {
    // check for string
    if (typeof object_props[key] !== 'string') break

    // general function
    const loc_res = {}
    if (object_props[key].includes('.'))
      loc_res[key] = get_computed_from_complex_string(
        store_name,
        object_props[key],
      )
    else
      loc_res[key] = get_computed_from_simple_string(
        store_name,
        object_props[key],
      )

    result = { ...result, ...loc_res }
  }

  return result
}
