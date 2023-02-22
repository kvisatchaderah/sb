// assets
import Header from '@/views/apps/crm/widgets/components/body/create_widget/assets/header/header.vue'
import FooterButtons from '@/views/apps/crm/widgets/components/body/create_widget/assets/footer_buttons/footer_buttons.vue'
import CreateWidgetElement from '@/views/apps/crm/widgets/components/body/create_widget/assets/create_widget_element/create_widget_element.vue'

// window
import WindowHeader from '@/views/apps/crm/widgets/components/body/create_widget/assets/window_header/window_header.vue'
import Window from '@/views/apps/crm/widgets/components/body/create_widget/assets/window/window.vue'
import AddWindow from '@/views/apps/crm/widgets/components/body/create_widget/assets/add_window/add_window.vue'

// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'
import { use_relations } from '@/views/apps/crm/widgets/assets/uses/_uses'

// export
export default {
  // components
  components: {
    // assets
    Header,
    FooterButtons,
    CreateWidgetElement,

    // window
    WindowHeader,
    Window,
    AddWindow,
  },

  // setup
  setup() {
    return {
      ...use_relations(),
      ...use_store_computeds(store_name, {
        windows: 'new_widget.views.windows',
      }),
    }
  },
}
