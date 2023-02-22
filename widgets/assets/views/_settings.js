// store_name
const store_name = 'widgets'

// component_names
const component_names = {
  create_widget: 'create-widget',
  widget_view: 'widget-view',
  widgets_list: 'widgets-list',
}
const init_component_name = component_names.create_widget

// steps
const steps = [
  {
    icon: 'FeatherIcon',
    label: 'Стили',
    comment:
      'Внешний вид виджета (вы можете отключить все стили, добавив к форме нужный вам id в пункте специальных возможностей)',
    component_name: 'styles',
  },
  {
    icon: 'LayersIcon',
    label: 'Содержимое',
    comment: 'Функционал виджета',
    component_name: 'views',
  },
  {
    icon: 'SettingsIcon',
    label: 'Специальные',
    comment: 'Возможности для разработчика',
    component_name: 'special',
  },
]

// icons
const icon_size = {
  s: '18',
  m: '22',
  l: '26',
}

// data_types
import data_types from '@/views/apps/crm/requests/assets/js/request_data_types_options'

// form elem init
const form_elem_init = {
  id: 0,
  name: 'Имя поля',
  type: data_types[0].value,
  required: false,
}

// data_types
import colors from './colors'
import icons from './icons'
import init_new_widget from './init_new_widget_'

//
// export
//

export {
  store_name,
  component_names,
  init_component_name,
  icon_size,
  steps,
  data_types,
  form_elem_init,
  colors,
  icons,
  init_new_widget,
}
