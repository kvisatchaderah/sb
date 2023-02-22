import { data_types } from './_settings'

export default {
  // TODO создать шаблон для tree_labels
  // tree
  tree_labels: [
    'Заголовок первой группы значений',
    'Заголовок второй группы значений',
  ],

  // TODO создать шаблон для иконок

  // widget_button_open_text
  widget_button_open_text: {
    value: '',
    type: 'input',
    placeholder: 'Текст около кнопки открытия',
  },

  // widget_button_open_icon
  widget_button_open_icon: {
    value: 'MessageSquareIcon',
    type: 'icons',
  },

  // widget_button_close_text
  widget_button_close_text: {
    value: '',
    type: 'input',
    placeholder: 'Текст около кнопки закрытия',
  },

  // widget_button_close_icon
  widget_button_close_icon: {
    value: 'XIcon',
    type: 'icons',
  },

  // windows
  windows: [
    [
      {
        id: 0,
        name: 'Имя',
        type: data_types[0].value,
        required: false,
      },
      {
        id: 0,
        name: 'Телефон',
        type: data_types[1].value,
        required: true,
      },
    ],
  ],
}
