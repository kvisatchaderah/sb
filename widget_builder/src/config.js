export default {
  // TODO write config default

  // modifiers
  modifiers: {
    // TODO add label position setting
    // js vars
    labels: true,
    labels_overflow: true,
    placeholders: true,
    shadows: true,
    // TODO добавить настройку для вкл выкл оверлея
    // TODO добавить настройку для закрытия оверлея по клику по нему

    buttons_variant: 'fill', // fill outline

    // transform
    // standart uppercase lowercase capitalize
    tree_labels_transform: 'lowercase',
    labels_transform: 'lowercase',
    placeholders_transform: 'lowercase',
    widget_buttons_transform: 'lowercase',
    errors_transform: 'lowercase',

    // mode
    open_template: 'modal', // standart modal sidebar
    mode: 'tree', // standart quiz tree

    // position
    widget_button_close_position: 'top', // left right bottom top
    widget_button_direction: 'normal', // normal reverse

    widget_side: 'left', // top bottom left right
    widget_position: 'middle', // left center right // top middle bottom

    widget_button_side: 'left', // top bottom left right
    widget_button_position: 'middle', // left center right // top middle bottom

    // TODO добавить настройку для включения / выключения кнопки закрытия
  },

  // vars
  vars: {
    // TODO add label font size
    background_color: '#f0f0f0',
    font_color: '#000000',
    font_size: '20px',
    widget_width: '350px',
    widget_button_icon_size: '30px',
    widget_button_font_size: '22px',

    base_distance: '8px',
    base_border_radius: '4px',
    scroll_border_width: '4px',

    button_next_color: 'green',
    button_disable_color: 'blue',
    button_prev_color: 'grey',
    base_opacity: 0.7, // TODO принимает доли единицы или проценты

    label_size: 2,
    input_size: 3,
  },

  // scrypts
  scrypts: {
    open_method: 'dynamic', // TODO dynamic time_value close open
  },

  // special
  special: {
    // no_style
    // TODO add full correct work
    no_style: false,

    //
    // identeficators
    //

    //  widget
    widget__ids: '',
    widget__classes: '',
    widget__active_classes: '',

    // submit_button
    submit__ids: '',
    submit__classes: '',
  },

  // views
  views: {
    // tree_labels
    tree_labels: ['1 tree label', '2 tree label'],

    // TODO change to widget button object

    // widget_label
    widget_button_open_text: 'open_text ',
    widget_button_open_icon: 'message_square',
    widget_button_close_text: '',
    widget_button_close_icon: 'x',

    // windows
    windows: [
      // TODO добавить возможность записи плейсхолдера из нейма или плейсхолдера
      [
        {
          id: 1,
          name: 'text 1',
          type: 'text',
          required: true,
          min: 2,
        },
        {
          id: 0,
          name: 'tel 1',
          type: 'tel',
        },
      ],

      [
        {
          id: 0,
          name: 'text 2',
          type: 'text',
          min: 4,
        },
        {
          id: 0,
          name: 'tel 2',
          type: 'tel',
          required: true,
        },
      ],
    ],
  },
}
