import store from '@/store'

export default function (store_name, store_module) {
  // register
  if (!store.hasModule(store_name)) {
    store.registerModule(store_name, store_module)
  }

  // init
  if (store._actions[`${store_name}/init`])
    store.dispatch(`${store_name}/init`)
}
