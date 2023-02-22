// store
import store from '@/store'
import store_module from './store/store'
import { store_name } from './assets/views/_settings'

// composition-api
import { computed, onBeforeUnmount } from '@vue/composition-api'

// use
import { use_local_store, use_store_computeds, map_actions } from '@uses'

// components
// header
import HeaderCreateWidget from './components/header/create_widget/create_widget.vue'
import HeaderWidgetView from './components/header/widget_view/widget_view.vue'
import HeaderWidgetsList from './components/header/widgets_list/widgets_list.vue'
// body
import BodyCreateWidget from './components/body/create_widget/create_widget.vue'
import BodyWidgetView from './components/body/widget_view/widget_view.vue'
import BodyWidgetsList from './components/body/widgets_list/widgets_list.vue'

// export
export default {
  // components
  components: {
    // header
    HeaderCreateWidget,
    HeaderWidgetView,
    HeaderWidgetsList,

    // body
    BodyCreateWidget,
    BodyWidgetView,
    BodyWidgetsList,
  },

  // setup
  setup() {
    // use store
    use_local_store(store_name, store_module)

    // load_data
    store.dispatch(`${store_name}/load_data`)

    // active component
    const { active_component } = use_store_computeds(store_name, [
      'active_component',
    ])
    const get_active_component_header = computed(() => {
      return 'header-' + active_component.value
    })
    const get_active_component_body = computed(() => {
      return 'body-' + active_component.value
    })

    onBeforeUnmount(() => {
      map_actions(store_name, ['remove_script_node']).remove_script_node()
    })

    // return
    return {
      active_component,
      get_active_component_header,
      get_active_component_body,
    }
  },
}
