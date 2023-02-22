// add_dimension
const get_value_with_dimension = (values_object) => {
  // not prefix in value
  if (
    values_object.prefix &&
    !new RegExp('^' + values_object.prefix).test(values_object.value)
  ) {
    return values_object.prefix + values_object.value
  }

  // not postfix in value
  if (
    values_object.postfix &&
    !new RegExp(values_object.postfix + '$').test(values_object.value)
  ) {
    return values_object.value + values_object.postfix
  }

  // other
  return values_object.value
}

// get_config_value
const get_config_value = (values_object) => {
  // standart
  if (values_object.value !== undefined)
    return get_value_with_dimension(values_object)

  // other variants
  return values_object
}

// get_config_group
const get_config_group = (values_group_object) => {
  return Object.keys(values_group_object).reduce((result, key) => {
    result[key] = get_config_value(values_group_object[key])
    return result
  }, {})
}

// get_config_to_bd
const get_config_to_bd = (config_object) => {
  return Object.keys(config_object).reduce((result, key) => {
    if (key === 'vue') return result

    result[key] = get_config_group(config_object[key])
    return result
  }, {})
}

// export
export default get_config_to_bd
