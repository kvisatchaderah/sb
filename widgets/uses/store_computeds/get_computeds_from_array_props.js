import get_computed_from_simple_string from './get_computed_from_simple_string'

export default function (store_name, array_props) {
  let result = {}

  array_props.forEach((computed_name) => {
    // check for string
    if (typeof computed_name !== 'string') return
    if (computed_name.includes('.')) return

    const loc_res = {}
    loc_res[computed_name] = get_computed_from_simple_string(
      store_name,
      computed_name,
    )

    result = { ...result, ...loc_res }
  })

  return result
}
