// store
import store from '@/store'
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'

// generate_composition_key
const generate_composition_key = (input) => {
  let type = store.state[store_name]
  const input_keys = input.split('.')

  input_keys.forEach((input_key) => {
    type = type[input_key]
  })

  return type.type ? type.type + '-view' : ''
}

// generate_composition_keys
const generate_composition_keys = (input_array) => {
  const result = []

  input_array.forEach((input) => {
    const inut_composition_key = generate_composition_key(input)
    result.push(inut_composition_key)
  })

  return result
}

// export
export default generate_composition_keys
