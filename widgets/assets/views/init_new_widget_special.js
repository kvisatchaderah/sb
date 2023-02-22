export default {
  // no_style
  no_style: {
    value: false,
    type: 'switch',
    options: {
      false: 'Стили включены',
      true: 'Стили выключены',
    },
  },

  // widget__ids
  widget__ids: {
    value: '',
    prefix: '#',
    type: 'input',
    placeholder: 'Допустимо с # и без',
  },

  // widget__classes
  widget__classes: {
    value: '',
    prefix: '.',
    type: 'input',
    placeholder: 'Допустимо с . и без',
  },

  // widget__active_classes
  widget__active_classes: {
    value: '',
    prefix: '.',
    type: 'input',
    placeholder: 'Допустимо с . и без',
  },

  // submit__ids
  submit__ids: {
    value: '',
    prefix: '#',
    type: 'input',
    placeholder: 'Допустимо с # и без',
  },

  // submit__classes
  submit__classes: {
    value: '',
    prefix: '.',
    type: 'input',
    placeholder: 'Допустимо с . и без',
  },
}
