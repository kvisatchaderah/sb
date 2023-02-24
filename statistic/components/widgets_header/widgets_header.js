// store
import store from '@/store'
import { mapActions } from 'vuex'

// core components
import Title from '@core/components/card-title-and-data/card-title-and-data.vue'

// export
export default {
  // name
  name: 'widgets_header',

  // components
  components: {
    Title,
  },

  // computed
  computed: {
    // template
    date_begin: {
      get() {
        return store.state.crm.date_begin
      },
      set(value) {
        store.state.crm.date_begin = value
      },
    },

    date_end: {
      get() {
        return store.state.crm.date_end
      },
      set(value) {
        store.state.crm.date_end = value
      },
    },

    // statistic
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

    // events
    calendar_events: {
      get() {
        return store.state.crm.calendar_events
      },
      set(value) {
        store.state.crm.calendar_events = value
      },
    },

    doctor_events: {
      get() {
        return store.state.crm.doctor_events
      },
      set(value) {
        store.state.crm.doctor_events = value
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

  // methods
  methods: {
    //
    // mapActions
    //

    ...mapActions({
      fetch_requests: 'crm/fetch_requests',
      fetch_widgets: 'crm/fetch_widgets',
      fetch_columns: 'crm/fetch_columns',
      fetch_funnel: 'crm/fetch_funnel',
      fetch_calendar_events: 'crm/fetch_calendar_events',
      fetch_doctor_events: 'crm/fetch_doctor_events',
      fetch_discounts: 'crm/fetch_discounts',
    }),

    //
    // update
    //

    async change_date() {
      ;[
        {
          create_requests: this.create_requests,
          arhive_requests: this.arhive_requests,
        },
        this.widgets,
        this.columns,
        this.doctor_events,
        this.calendar_events,
        this.discounts,
        this.funnel,
      ] = await Promise.all([
        this.fetch_requests(),
        this.fetch_widgets(),
        this.fetch_columns(),
        this.fetch_doctor_events(),
        this.fetch_calendar_events(),
        this.fetch_discounts(),
        this.fetch_funnel(),
      ])
    },
  },
}
