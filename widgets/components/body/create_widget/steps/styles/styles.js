// components
import Header from '@/views/apps/crm/widgets/components/body/create_widget/assets/header/header.vue'
import FooterButtons from '@/views/apps/crm/widgets/components/body/create_widget/assets/footer_buttons/footer_buttons.vue'
import CreateWidgetElement from '@/views/apps/crm/widgets/components/body/create_widget/assets/create_widget_element/create_widget_element.vue'

// use

import { use_relations } from '@/views/apps/crm/widgets/assets/uses/_uses'

// export
export default {
  // components
  components: {
    Header,
    FooterButtons,
    CreateWidgetElement,
  },

  // setup
  setup() {
    return use_relations()
  },
}
