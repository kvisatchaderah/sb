// lib
import axios from '@axios'

// assets
import icon_size from '../assets/js/icon_size'

// mixins
import __mixin__get_sort_by from '@core/mixins/get_sort_by.js'
const { get_sort_by } = __mixin__get_sort_by.methods

// export
export default {
  // namespaced
  namespaced: true,

  // state
  state: {
    date_begin: null,
    date_end: null,
    columns: null,
    doctor_events: null,
    calendar_events: null,
    create_requests: null,
    arhive_requests: null,
    widgets: null,
    discounts: null,
    funnel: null,
    employees: null,

    // assets
    icon_size: icon_size,
  },

  // actions
  actions: {
    //
    // init
    //

    init({ state }) {
      // date
      state.date_begin = null
      state.date_end = null

      // widgets
      state.widgets = []

      // requests
      state.columns = []
      state.create_requests = []
      state.arhive_requests = []

      // other
      state.doctor_events = []
      state.calendar_events = []
      state.discounts = []
      state.funnel = []
      state.employees = []
    },

    // sort_to_rate
    get_sort_by_rate(_, array) {
      return get_sort_by(array, 'rate')
    },

    //
    // fetchs
    //

    get_time({ state }) {
      return `?begin=${state.date_begin.split(' ')[0]}&end=${
        state.date_end.split(' ')[0]
      }`
    },

    async fetch_requests({ dispatch }) {
      return axios
        .get('/api/apps/crm/statistic/requests' + (await dispatch('get_time')))
        .then((response) => response.data)
    },

    async fetch_widgets({ dispatch }) {
      return axios
        .get('/api/apps/crm/statistic/widgets' + (await dispatch('get_time')))
        .then((response) => response.data)
    },

    async fetch_columns({ dispatch }) {
      return axios
        .get('/api/apps/crm/statistic/columns' + (await dispatch('get_time')))
        .then((response) => response.data)
        .then(async (response) => await dispatch('get_sort_by_rate', response))
    },

    async fetch_funnel({ dispatch }) {
      return axios
        .get('/api/apps/crm/statistic/funnel' + (await dispatch('get_time')))
        .then((response) => response.data)
    },

    async fetch_calendar_events({ dispatch }) {
      return axios
        .get(
          '/api/apps/crm/statistic/calendar_events' +
            (await dispatch('get_time'))
        )
        .then((response) => response.data)
    },

    async fetch_doctor_events({ dispatch }) {
      return axios
        .get(
          '/api/apps/crm/statistic/doctor_events' + (await dispatch('get_time'))
        )
        .then((response) => response.data)
    },

    async fetch_discounts({ dispatch }) {
      return axios
        .get('/api/apps/crm/statistic/discounts' + (await dispatch('get_time')))
        .then((response) => response.data)
    },

    fetch_employees() {
      return axios
        .get('/api/apps/employees/only_employees', {
          params: {
            add_doctors: true,
          },
        })
        .then((response) => response.data)
    },
  },
}
