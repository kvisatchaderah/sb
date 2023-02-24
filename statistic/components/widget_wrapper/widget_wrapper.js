// core components
import Title from '@core/components/card-title-and-data/card-title-and-data.vue'

// export
export default {
  // props
  props: ['title'],

  // components
  components: {
    Title,
  },

  // data
  data() {
    return {
      title_height: 45,
    }
  },
}
