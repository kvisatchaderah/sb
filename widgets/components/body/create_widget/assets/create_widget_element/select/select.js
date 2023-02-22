// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'

// composition-api
import { computed } from '@vue/composition-api'

// libs
import { BFormCheckbox } from 'bootstrap-vue'

// export
export default {
  // props
  props: ['input', 'value_path'],

  // components
  components: { BFormCheckbox },

  // setup
  setup(props) {
    const { value, options } = use_new_widget_element(
      props.input,
      props.value_path
    )

    const has_slot = computed(() => {
      return options.value && options.value.true && options.value.false
    })
    return {
      value,
      options,
      has_slot,
    }
  },
}
