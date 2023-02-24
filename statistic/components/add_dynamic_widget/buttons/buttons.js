import store from '@/store'

// export
export default {
  // props
  props: {
    prev: { type: Boolean, default: false },
    next: { type: Boolean, default: false },
    add: { type: Boolean, default: false },
  },

  // computed
  computed: {
    // assets
    icon_size() {
      return store.state.crm.icon_size
    },
  },
}
