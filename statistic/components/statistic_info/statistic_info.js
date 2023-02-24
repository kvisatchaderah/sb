// filters
import add_num_separator from '@core/filters/add_num_separator'

// mixins
import get_sort_by from '@core/mixins/get_sort_by'

// export
export default {
  // props
  props: {
    info: {
      type: Array,
      default: [],
    },

    tabs: {
      type: Array,
      default: [],
    },

    times: {
      type: String,
      default: '',
    },
  },

  watch: {
    info() {
      this.set_tabs_data()
    },
  },

  // data
  data() {
    return {
      active_tab: 0,
      tabs_data: [],
    }
  },

  // filters
  filters: { add_num_separator },

  // mixins
  mixins: [get_sort_by],

  // created
  created() {
    this.set_tabs_data()
  },

  // methods
  methods: {
    set_tabs_data() {
      this.tabs_data = []
      this.tabs.forEach((tab) => this.set_tab_data(tab))
    },

    set_tab_data(tab) {
      // !this.info
      if (!this.info.length) {
        this.tabs_data.push([])
        return
      }

      // init
      let tab_data = []

      // set values and names
      this.info.forEach((info_value) =>
        tab_data.push(this.set_tab_data_value(tab, info_value)),
      )

      tab_data = this.get_sort_by(tab_data, 'value', 'desc')
      tab.max_value = this.get_max_value(tab_data)
      tab.all_quantity = this.get_all_quantity(tab_data)

      // set widths
      tab_data.forEach((tab_value) => {
        tab_value.width = this.get_width(tab_value.value, tab.max_value)
      })

      // set
      this.tabs_data.push(tab_data)
    },

    set_tab_data_value(tab, info_value) {
      return {
        id: info_value.id ?? 0,
        // name
        name: tab.filter
          ? tab.filter(info_value[tab.name_key])
          : info_value[tab.name_key],

        // value
        value: info_value[tab.value_key],
      }
    },

    get_max_value(array) {
      let max_value = array[0].value

      array.forEach((elem) => {
        if (elem.value > max_value) max_value = elem.value
      })

      return max_value
    },

    get_all_quantity(array) {
      return array.reduce((acc, current) => {
        return acc + current.value
      }, 0)
    },

    get_width(current_value, max_value) {
      return max_value ? `${(100 * current_value) / max_value}%` : '100%'
    },
  },
}
