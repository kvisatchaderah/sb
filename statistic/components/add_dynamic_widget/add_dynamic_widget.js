// assets
import {
  dynamic_widget_null,
  dezigns,
  values,
  cols,
  rows,
} from '@/views/apps/crm/statistic/assets/js/dynamic_widget_data.js'

// store
import store from '@/store'

// components
import Buttons from './buttons/buttons.vue'

// export
export default {
  // components
  components: { Buttons },

  // data
  data() {
    return {
      // template
      active_step: null,
      steps: ['dezign', 'value', 'size'],

      // data
      widget: dynamic_widget_null,
      dezigns: dezigns,
      values: values,
      cols: cols,
      rows: rows,
    }
  },

  // computed
  computed: {
    // widgets
    widgets: {
      get() {
        return store.state.crm.widgets
      },
      set(value) {
        store.state.crm.widgets = value
      },
    },
  },

  // created
  created() {
    this.init()
  },

  // methods
  methods: {
    init() {
      this.active_step = 0
      this.widget.value = this.values[0]
      this.widget.dezign = this.dezigns[0]
    },

    add_dynamic_widget() {
      console.log(this.widget)
    },
  },
}
