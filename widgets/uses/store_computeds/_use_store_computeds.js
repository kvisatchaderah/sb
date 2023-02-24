// assets
import get_computeds_from_array_props from './get_computeds_from_array_props'
import get_computeds_from_object_props from './get_computeds_from_object_props'

// export
export default function (store_name, ...args) {
  return args.reduce((result, arg) => {
    if (type_is(arg, 'array')) {
      return {
        ...result,
        ...get_computeds_from_array_props(store_name, arg),
      }
    }

    if (type_is(arg, 'object')) {
      return {
        ...result,
        ...get_computeds_from_object_props(store_name, arg),
      }
    }
  }, {})
}
