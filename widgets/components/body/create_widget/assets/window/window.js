// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds, map_state } from '@uses'

// assets
import {
  data_types,
  form_elem_init,
} from '@/views/apps/crm/widgets/assets/views/_settings'
import { deep_copy } from '@helpers'

// libs
import { ref } from '@vue/composition-api'
import { BFormCheckbox } from 'bootstrap-vue'
import vSelect from 'vue-select'

// export
export default {
  // props
  props: ['window'],

  // components
  components: { BFormCheckbox, vSelect },

  // setup
  setup(props) {
    const component_key = ref(0)
    // store computeds
    const { form_window } = use_store_computeds(store_name, {
      form_window: props.window,
    })

    const reactive_component = () => {
      component_key.value++
    }

    // add new form elem
    const add_new_form_elem = () => {
      form_window.value.push(deep_copy(form_elem_init))
      reactive_component()
    }

    const { crm_data_types } = map_state(store_name, ['crm_data_types'])

    const set_form_elem = (index) => {
      const form_elem = form_window.value[index]
      if (!form_elem.id) return

      const crm_form_elem = crm_data_types.value.find(
        (elem) => elem.id === form_elem.id
      )
      form_elem.name = crm_form_elem.name
      form_elem.type = crm_form_elem.type
    }

    const delete_form_elem = (index) => {
      form_window.value.splice(index, 1)
      reactive_component()
    }

    return {
      component_key,
      form_window,
      data_types,
      set_form_elem,
      add_new_form_elem,
      crm_data_types,
      delete_form_elem,
      ...use_store_computeds(store_name, ['icon_size']),
    }
  },
}
