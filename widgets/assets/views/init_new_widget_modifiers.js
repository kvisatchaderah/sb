import { set_options, sync_widget_positions } from '../functions/_functions'
import { deep_copy } from '@helpers'
import positions from './init_new_widget_positions'
import positions_with_functions from './init_new_widget_positions_with_functions'

export default {
  // labels
  labels: {
    value: false,
    type: 'switch',
    options: {
      false: 'Подписи отображаются',
      true: 'Подписи не отображаются',
    },
  },

  // labels_overflow
  labels_overflow: {
    value: true,
    type: 'switch',
    options: {
      false: 'Текст подписи обрезается',
      true: 'Текст подписи не обрезается',
    },
  },

  // placeholders
  placeholders: {
    value: true,
    type: 'switch',
    options: {
      false: 'Подсказка показывается',
      true: 'Подсказка не показывается',
    },
  },

  // shadows
  shadows: {
    value: true,
    type: 'switch',
    options: {
      false: 'Тени включены',
      true: 'Тени выключены',
    },
  },

  // buttons_variant
  buttons_variant: {
    value: 'outline',
    type: 'radio',
    options: [
      {
        label: 'Цветные границы',
        value: 'outline',
      },
      {
        label: 'Заливка цветом',
        value: 'fill',
      },
    ],
  },

  // tree_labels_transform
  tree_labels_transform: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Без изменений',
        value: 'standart',
      },
      {
        label: 'Верхний регистр',
        value: 'uppercase',
      },
      {
        label: 'Нижний регистр',
        value: 'lowercase',
      },
      {
        label: 'С больших букв',
        value: 'capitalize',
      },
    ],
  },

  // labels_transform
  labels_transform: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Без изменений',
        value: 'standart',
      },
      {
        label: 'Верхний регистр',
        value: 'uppercase',
      },
      {
        label: 'Нижний регистр',
        value: 'lowercase',
      },
      {
        label: 'С больших букв',
        value: 'capitalize',
      },
    ],
  },

  // placeholders_transform
  placeholders_transform: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Без изменений',
        value: 'standart',
      },
      {
        label: 'Верхний регистр',
        value: 'uppercase',
      },
      {
        label: 'Нижний регистр',
        value: 'lowercase',
      },
      {
        label: 'С больших букв',
        value: 'capitalize',
      },
    ],
  },

  // widget_buttons_transform
  widget_buttons_transform: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Без изменений',
        value: 'standart',
      },
      {
        label: 'Верхний регистр',
        value: 'uppercase',
      },
      {
        label: 'Нижний регистр',
        value: 'lowercase',
      },
      {
        label: 'С больших букв',
        value: 'capitalize',
      },
    ],
  },

  // errors_transform
  errors_transform: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Без изменений',
        value: 'standart',
      },
      {
        label: 'Верхний регистр',
        value: 'uppercase',
      },
      {
        label: 'Нижний регистр',
        value: 'lowercase',
      },
      {
        label: 'С больших букв',
        value: 'capitalize',
      },
    ],
  },

  // open_template
  open_template: {
    value: 'standart',
    type: 'radio',
    options: [
      {
        label: 'Стандартное',
        value: 'standart',
      },
      {
        label: 'Боковой сайдбар',
        value: 'sidebar',
      },
      {
        label: 'Модальное окно',
        value: 'modal',
      },
    ],
  },

  // mode
  mode: {
    value: 'standart',
    type: 'buttons',
    options: [
      {
        label: 'Стандартная',
        value: 'standart',
      },
      {
        label: 'Квиз',
        value: 'quiz',
      },
      {
        label: 'Дерево',
        value: 'tree',
      },
    ],
  },

  // widget_button_close_position
  widget_button_close_position: {
    value: 'top',
    type: 'radio',
    options: [
      {
        label: 'Сверху',
        value: 'top',
      },
      {
        label: 'Справа',
        value: 'right',
      },
      {
        label: 'Снизу',
        value: 'bottom',
      },
      {
        label: 'Слева',
        value: 'left',
      },
    ],
  },

  // widget_button_direction
  widget_button_direction: {
    value: 'normal',
    type: 'radio',
    options: [
      {
        label: 'Иконка справа',
        value: 'normal',
      },
      {
        label: 'Иконка слева',
        value: 'reverse',
      },
    ],
  },

  // widget_side
  widget_side: {
    value: 'right',
    type: 'radio',
    options: [
      {
        label: 'Справа',
        value: 'right',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_position.variants',
            deep_copy(positions_with_functions.vertical)
          ),
          sync_widget_positions(),
        ],
      },
      {
        label: 'Слева',
        value: 'left',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_position.variants',
            deep_copy(positions_with_functions.vertical)
          ),
          sync_widget_positions(),
        ],
      },
      {
        label: 'Сверху',
        value: 'top',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_position.variants',
            deep_copy(positions_with_functions.horisontal)
          ),
          sync_widget_positions(),
        ],
      },
      {
        label: 'Снизу',
        value: 'bottom',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_position.variants',
            deep_copy(positions_with_functions.horisontal)
          ),
          sync_widget_positions(),
        ],
      },
    ],
  },

  // widget_position
  widget_position: {
    // value
    value: null,

    // variants
    variants: {
      value: 'bottom',
      type: 'radio',
      options: deep_copy(positions_with_functions.vertical),
    },

    // hand_value
    hand_value: {
      value: '70',
      postfix: '%',
      type: 'input',
      input_type: 'number',
      placeholder: 'в процентах ',
      functions: [sync_widget_positions()],
    },
  },

  // widget_button_side
  widget_button_side: {
    value: 'right',
    type: 'radio',
    options: [
      {
        label: 'Справа',
        value: 'right',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_button_position.variants',
            deep_copy(positions.vertical)
          ),
        ],
      },
      {
        label: 'Слева',
        value: 'left',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_button_position.variants',
            deep_copy(positions.vertical)
          ),
        ],
      },
      {
        label: 'Сверху',
        value: 'top',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_button_position.variants',
            deep_copy(positions.horisontal)
          ),
        ],
      },
      {
        label: 'Снизу',
        value: 'bottom',

        // functions
        functions: [
          set_options(
            'new_widget.modifiers.widget_button_position.variants',
            deep_copy(positions.horisontal)
          ),
        ],
      },
    ],
  },

  // widget_button_position
  widget_button_position: {
    // value
    value: null,

    // variants
    variants: {
      value: 'bottom',
      type: 'radio',
      options: deep_copy(positions.vertical),
    },

    // hand_value
    hand_value: {
      value: '70',
      postfix: '%',
      type: 'input',
      input_type: 'number',
      placeholder: 'в процентах ',
    },
  },
}
