// store
import { type_is } from '@helpers'
import store from '@/store'
import { computed } from '@vue/composition-api'

//
// get_map
//

const get_map = (configs, builder) => {
  const config = merge_configs(configs)
  const map_builder = builder(config)

  return Object.keys(config).reduce(map_builder, {})
}

const merge_configs = (configs) => {
  return configs.reduce((result, config) => {
    if (type_is(config, 'array')) config = get_object_config(config)

    return { ...result, ...config }
  }, {})
}

const get_object_config = (array_config) => {
  return array_config.reduce((result, config_elem) => {
    result[config_elem] = config_elem
    return result
  }, {})
}

//
// builders
//

const get_builder = (store_name, variant) => {
  const builder_working = get_builder_working(variant)

  return (config) => {
    return (map, config_key) => {
      map[config_key] = builder_working(store_name, config, config_key)
      return map
    }
  }
}

const get_builder_working = (variant) => {
  return {
    state: state_builder,
    getter: getter_builder,
    mutation: mutation_builder,
    action: action_builder,
  }[variant]
}

const state_builder = (store_name, config, config_key) => {
  return computed(() => store.state[store_name][config[config_key]])
}

const getter_builder = (store_name, config, config_key) => {
  return computed(() => store.getters[`${store_name}/${config[config_key]}`])
}

const mutation_builder = (store_name, config, config_key) => {
  return (value) => store.commit(`${store_name}/${config[config_key]}`, value)
}

const action_builder = (store_name, config, config_key) => {
  return (value) => store.dispatch(`${store_name}/${config[config_key]}`, value)
}

//
// maps
//

const map_state = (store_name, ...configs) => {
  const builder = get_builder(store_name, 'state')
  return get_map(configs, builder)
}

const map_getters = (store_name, ...configs) => {
  const builder = get_builder(store_name, 'getter')
  return get_map(configs, builder)
}

const map_mutations = (store_name, ...configs) => {
  const builder = get_builder(store_name, 'mutation')
  return get_map(configs, builder)
}

const map_actions = (store_name, ...configs) => {
  const builder = get_builder(store_name, 'action')
  return get_map(configs, builder)
}

// export
export { map_state, map_getters, map_mutations, map_actions }
