import { computed } from '@vue/composition-api'

export default function (store_value, key) {
  return computed({
    get() {
      return store_value[key]
    },

    set(value) {
      store_value[key] = value
    },
  })
}
