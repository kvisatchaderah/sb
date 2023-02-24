// store
import store from '@/store'

// core
import StatisticCardHorizontal from '@core/components/statistics-cards/StatisticCardHorizontal.vue'

// mixins
import get_linear_gradient from '@core/mixins/get_linear_gradient'

// export
export default {
  // components
  components: {
    StatisticCardHorizontal,
  },

  // computed
  computed: {
    // assets
    icon_size() {
      return store.state.crm.icon_size
    },

    // columns
    columns: {
      get() {
        return store.state.crm.columns
      },
      set(value) {
        store.state.crm.columns = value
      },
    },
  },

  // mixins
  mixins: [get_linear_gradient],
}
