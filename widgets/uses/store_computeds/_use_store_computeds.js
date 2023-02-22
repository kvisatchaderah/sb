// assets
import get_computeds_from_array_props from './get_computeds_from_array_props'
import get_computeds_from_object_props from './get_computeds_from_object_props'

// export
export default function (store_name, ...args) {
  let result = {}

  args.forEach(arg => {
    if (Array.isArray(arg)) {
      result = {
        ...result,
        ...get_computeds_from_array_props(store_name, arg),
      }
      return
    }

    if (typeof arg === 'object') {
      result = {
        ...result,
        ...get_computeds_from_object_props(store_name, arg),
      }
      return
    }
  })

  return result
}
