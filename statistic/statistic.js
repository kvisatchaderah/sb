// customize
import WidgetsHeader from './components/widgets_header/widgets_header.vue'
import Columns from './components/columns/columns.vue'
import StatisticInfo from './components/statistic_info/statistic_info.vue'
import AddDynamicWidget from './components/add_dynamic_widget/add_dynamic_widget.vue'
import DynamicWidgets from './components/dynamic_widgets/dynamic_widgets.vue'
import Dashboard from './components/dashboard/dashboard.vue'
import WidgetWrapper from './components/widget_wrapper/widget_wrapper.vue'
import Calendar from './components/calendar/calendar.vue'

// core
import FEchart from '@core/components/f_echart/f_echart.vue'

// filters
import get_employee_name from '@/views/apps/crm/statistic/filters/get_employee_name'

// store
import store from '@/store'
import { mapActions } from 'vuex'
import store_name from './assets/js/store_name'
import store_module from './store/store'

// use
import use_local_store from '@/@core/uses/local_store/_use_local_store'

// export
export default {
  // components
  components: {
    // customize
    WidgetsHeader,
    Columns,
    StatisticInfo,
    AddDynamicWidget,
    DynamicWidgets,
    Dashboard,
    WidgetWrapper,
    Calendar,

    // core
    FEchart,
  },

  // data
  data() {
    return { get_employee_name: get_employee_name }
  },

  // computed
  computed: {
    // template
    employees: {
      get() {
        return store.state.crm.employees
      },
      set(value) {
        store.state.crm.employees = value
      },
    },

    // widgets
    widgets: {
      get() {
        return store.state.crm.widgets
      },
      set(value) {
        store.state.crm.widgets = value
      },
    },

    // requests
    columns: {
      get() {
        return store.state.crm.columns
      },
      set(value) {
        store.state.crm.columns = value
      },
    },

    arhive_requests: {
      get() {
        return store.state.crm.arhive_requests
      },
      set(value) {
        store.state.crm.arhive_requests = value
      },
    },

    create_requests: {
      get() {
        return store.state.crm.create_requests
      },
      set(value) {
        store.state.crm.create_requests = value
      },
    },

    // others
    doctor_events: {
      get() {
        return store.state.crm.doctor_events
      },
      set(value) {
        store.state.crm.doctor_events = value
      },
    },

    calendar_events: {
      get() {
        return store.state.crm.calendar_events
      },
      set(value) {
        store.state.crm.calendar_events = value
      },
    },

    discounts: {
      get() {
        return store.state.crm.discounts
      },
      set(value) {
        store.state.crm.discounts = value
      },
    },

    funnel: {
      get() {
        return store.state.crm.funnel
      },
      set(value) {
        store.state.crm.funnel = value
      },
    },

    times: {
      get() {
        return `date_begin=${store.state.crm.date_begin}&date_end=${store.state.crm.date_end}`
      },
    },
  },

  // setup
  setup() {
    use_local_store(store_name, store_module)
  },

  // mounted
  mounted() {
    this.load_employees()
  },

  // methods
  methods: {
    ...mapActions({
      fetch_employees: 'crm/fetch_employees',
    }),

    async load_employees() {
      this.employees = await this.fetch_employees()
    },
  },
}
