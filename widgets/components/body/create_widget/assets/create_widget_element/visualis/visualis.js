// use
import { use_new_widget_element } from '@/views/apps/crm/widgets/assets/uses/_uses'
import { computed } from '@vue/composition-api'

// export
export default {
  // props
  props: ['input'],

  // setup
  setup(props) {
    const { values, placeholders } = use_new_widget_element(props.input)

    const computed_values = values.value.map((value_key) => {
      return use_new_widget_element(value_key).value
    })

    const get_template_columns = computed(() => {
      return computed_values.reduce(
        (result, value) => `${result} ${value.value}fr`,
        ''
      )
    })

    return {
      // data
      placeholders,

      // computeds
      get_template_columns,
    }
  },
}
