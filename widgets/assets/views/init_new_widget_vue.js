import { sync_widget_positions } from '../functions/_functions'

export default {
  // active_step
  active_step: 0,

  // widget_name
  widget_name: {
    value: '',
    type: 'input',
    placeholder: '',
  },

  // widget_sync
  widget_sync: {
    value: true,
    type: 'switch',
    options: {
      false: 'Раздельное положение формы и кнопки вызова формы',
      true: 'Синхронное положение формы и кнопки вызова формы',
    },
    functions: [sync_widget_positions()],
  },

  // label_input_sizes_vizualization
  label_input_sizes_vizualization: {
    values: ['new_widget.vars.label_size', 'new_widget.vars.input_size'],
    type: 'visualis',
    placeholders: ['label', 'input'],
  },

  // TODO add handle config and themes configes
  // current_style
  current_style: {
    value: 'null',
    type: 'radio',
    options: [
      {
        label: 'Темная',
        value: 'dark',
      },
      {
        label: 'Светлая',
        value: 'light',
      },
      {
        label: 'Задать вручную',
        value: 'null',
      },
    ],
  },
}
