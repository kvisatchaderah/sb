// settings
import {
  component_names,
  init_component_name,
  steps,
  icon_size,
  init_new_widget,
} from '../assets/views/_settings'
import axios from '@axios'

// assets
import { widget_name } from '@/views/apps/crm/widget_builder/src/form_builder/assets/_assets'

// helpers
import { deep_copy } from '@helpers'
import {
  get_config_to_bd,
  get_config_to_front,
} from '@/views/apps/crm/widgets/assets/functions/_functions'
import { reactive } from '@vue/composition-api'

// export
export default {
  // namespaced
  namespaced: true,

  // state
  state: {
    active_component: null,

    // create widget
    new_widget: null,
    crm_data_types: null,

    // widgets_list
    widgets: null,

    // widget_view
    script: null,
    script_node: null,

    // assets
    steps: steps,
    component_names: component_names,
    icon_size: icon_size,
  },

  // getters
  getters: {
    crm_form_elems(state) {
      const use_crm_data_type_ids = []
      state.new_widget.views.windows.forEach((window) => {
        window.forEach((form_elem) => {
          use_crm_data_type_ids.push(form_elem.id)
        })
      })

      return [
        { id: 0, name: 'Без привязки к CRM' },
        ...state.crm_data_types.filter(
          (crm_data_type) => !use_crm_data_type_ids.includes(crm_data_type.id)
        ),
      ]
    },
  },

  // actions
  actions: {
    //
    // init
    //

    init({ state, dispatch }) {
      state.active_component = init_component_name

      dispatch('create_new_widget_config')
    },

    //
    // load_data
    //

    fetch_crm_request_types() {
      return axios
        .get('/api/apps/crm/request_data_types?widgets=true')
        .then((response) => response.data)
    },

    fetch_widgets() {
      return axios.get('/api/apps/widget').then((response) => response.data)
    },

    fetch_widget({}, widget_id) {
      return axios
        .get(`/api/apps/widget/${widget_id}`)
        .then((response) => response.data)
    },

    async load_widgets({ state, dispatch }) {
      state.widgets = (await dispatch('fetch_widgets')).reverse()
    },

    async load_crm_request_types({ state, dispatch }) {
      state.crm_data_types = [
        { id: 0, name: 'Без привязки к CRM' },
        ...(await dispatch('fetch_crm_request_types')),
      ]
    },

    load_data({ dispatch }) {
      dispatch('load_widgets')
      dispatch('load_crm_request_types')
    },

    async load_widget({ state, dispatch }, widget_id) {
      const config_data = await dispatch('fetch_widget', widget_id)
      const config = get_config_to_front(config_data.config)
      state.new_widget = deep_copy({
        ...state.new_widget,
        ...config,
      })
    },

    //
    // create_new_widget_config
    //

    create_new_widget_config({ state }) {
      state.new_widget = reactive(deep_copy(init_new_widget))
    },

    create_script_node({ state }, data) {
      state.script_node = document.createElement('script')

      state.script_node.src = data.url
      state.script_node.id = widget_name
      state.script_node.dataset.config_url = data.config_url
      state.script_node.type = 'text/javascript'
    },

    append_script_node({ state }) {
      document.body.append(state.script_node)
    },

    remove_script_node({ state }) {
      if (!state.script_node) return

      const script_dom = document.getElementById(widget_name)
      if (script_dom) document.body.removeChild(script_dom)

      const widget_dom = document.querySelector('[data-' + widget_name + ']')
      if (widget_dom) document.body.removeChild(widget_dom)
    },

    set_script({ state }, data) {
      state.script = data.script
    },

    submit_new_widget({ state, dispatch }) {
      axios
        .post('/api/apps/widget', {
          config: get_config_to_bd(state.new_widget),
          name: state.new_widget.vue.widget_name.value,
        })
        .then((response) => response.data)
        .then((response) => {
          dispatch('remove_script_node')
          dispatch('create_script_node', response)
          dispatch('set_script', response)
          dispatch('open_widget_view')
          dispatch('create_new_widget_config')
        })
    },

    //
    // change active component
    //

    async open_widget({ dispatch }, widget_id) {
      await dispatch('load_widget', widget_id)
      dispatch('open_create_widget')
    },

    open_new_widget({ dispatch }) {
      dispatch('create_new_widget_config')
      dispatch('open_create_widget')
    },

    open_create_widget({ state }) {
      state.active_component = state.component_names.create_widget
    },

    open_widget_view({ state }) {
      state.active_component = state.component_names.widget_view
    },

    open_widgets_list({ state }) {
      state.active_component = state.component_names.widgets_list
    },
  },
}
