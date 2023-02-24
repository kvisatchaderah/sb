// store
import store from '@/store'
import VueCal from 'vue-cal'
import 'vue-cal/dist/vuecal.css'
import 'vue-cal/dist/i18n/ru.es.js'
import 'vue-cal/dist/drag-and-drop.es.js'

// export
export default {
  // components
  components: {
    VueCal,
  },

  // computed
  computed: {
    // template
    events: {
      get() {
        return store.state.crm.calendar_events
      },
      set(value) {
        store.state.crm.calendar_events = value
      },
    },

    // events for little calendar left aside
    eventsForSmallCalendar() {
      return demoExample.events.filter(
        event => event.background == false,
      )
    },
  },
}
