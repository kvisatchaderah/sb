// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'

// assets
import {
  get_store_state,
  get_option_from_value,
} from '@/views/apps/crm/widgets/assets/functions/_functions'
import { type_is } from '@helpers'

// export
export default (input, value_path) => {
  const { value, options } = use_store_computeds(store_name, {
    value: input + '.value',
    options: input + '.options',
  })

  //
  // set_config_value
  //

  const config_value_object = value_path
    ? get_store_state(value_path)
    : get_store_state(input)

  const set_config_value = (new_value) => {
    // set new value
    if (value_path) {
      config_value_object.value = new_value
    }

    // search config
    const option = get_option(new_value)
    if (!option) return

    config_value_object.prefix = option.prefix
    config_value_object.postfix = option.postfix

    if (type_is(option.functions, 'array')) option.functions.forEach((f) => f())
  }

  const get_option = (new_value) => {
    if (config_value_object.functions) return config_value_object

    if (config_value_object.options)
      return get_option_from_value(new_value, config_value_object.options)

    return (
      get_option_from_value(new_value, config_value_object.variants?.options) ||
      config_value_object.hand_value
    )
  }

  set_config_value(value.value)

  //
  // `template
  //

  const set_new_value = (new_value) => {
    // value
    value.value = new_value

    set_config_value(new_value)
  }

  const input_value = (new_value) => {
    set_config_value(new_value)
  }

  // return
  return {
    // data
    value,
    options,

    ...use_store_computeds(store_name, {
      value: input + '.value',
      values: input + '.values',
      type: input + '.input_type' ?? 'text',

      placeholder: input + '.placeholder',
      placeholders: input + '.placeholders',
    }),

    // methods
    set_new_value,
    input_value,
  }
}
