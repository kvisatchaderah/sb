// inputs
import RadioView from './radio/radio.vue'
import SwitchView from './switch/switch.vue'
import InputView from './input/input.vue'
import ColorsView from './colors/colors.vue'
import IconsView from './icons/icons.vue'
import ButtonsView from './buttons/buttons.vue'
import LabelView from './label/label.vue'
import VisualisView from './visualis/visualis.vue'

// TODO add component to styles classes
// TODO add component to styles on off widget button icon and text

// store
import { ref, computed, watch } from '@vue/composition-api'

// libs
import { BFormCheckbox } from 'bootstrap-vue'

// assets
import {
  generate_composition_keys,
  get_store_state,
} from '@/views/apps/crm/widgets/assets/functions/_functions'

// export
export default {
  props: {
    // standart
    label: { type: String },
    labels: { type: [Array, Object, Boolean] },
    comment: { type: String },
    inputs: { type: [Array, Object] },
    values: { type: [Array, Object, Boolean] },

    // switch
    switch: { type: Object },
  },

  // components
  components: {
    // inputs
    RadioView,
    SwitchView,
    InputView,
    ColorsView,
    IconsView,
    ButtonsView,
    LabelView,
    VisualisView,

    // libs
    BFormCheckbox,
  },

  // setup
  setup(props) {
    //
    // generate_composition_keys
    // and switch_wrapper
    //

    let composition_keys = null
    let switch_wrapper = {}

    if (!props.switch) {
      // standart mode
      composition_keys = generate_composition_keys(props.inputs)
      switch_wrapper = {
        status: false,
      }
    } else {
      // switch mode
      composition_keys = {
        true: generate_composition_keys(props.inputs.true),
        false: generate_composition_keys(props.inputs.false),
      }
      switch_wrapper = {
        status: true,
        value: props.switch.value ? ref(true) : ref(false),
        true_label: props.switch.true ?? '',
        false_label: props.switch.false ?? '',
      }
    }

    // switch wrapper watch
    const on_switch = () => {
      const current_inputs = props.inputs[switch_wrapper.value.value]
      const config_values = value_paths.value[switch_wrapper.value.value]

      config_values.forEach((_, index) => {
        const config_value_store = get_store_state(config_values[index])
        const current_input_store = get_store_state(current_inputs[index])

        config_value_store.value = current_input_store.value
      })
    }

    //
    // input_labels
    //

    const input_labels = computed(() => {
      // switch
      if (!props.switch) {
        return props.labels || [...Array(props.inputs.length)].map((_) => '')
      }
      // !switch
      else {
        return (
          props.labels || {
            true: [...Array(props.inputs.true.length)].map((_) => ''),
            false: [...Array(props.inputs.false.length)].map((_) => ''),
          }
        )
      }
    })

    //
    // value_paths
    //

    const value_paths = computed(() => {
      // switch
      if (!props.switch) {
        return props.values || [...Array(props.inputs.length)].map((_) => '')
      }
      // !switch
      else {
        // !props.values
        if (!props.values) {
          return {
            true: [...Array(props.inputs.true.length)].map((_) => ''),
            false: [...Array(props.inputs.false.length)].map((_) => ''),
          }
        }

        // array props.values
        if (Array.isArray(props.values)) {
          return {
            true: props.values,
            false: props.values,
          }
        }

        // object values
        return {
          true: props.values.true,
          false: props.values.false,
        }
      }
    })

    //
    // return
    //

    return {
      // data
      composition_keys,
      switch_wrapper,

      // computed
      input_labels,
      value_paths,

      // methods
      on_switch,
    }
  },
}
