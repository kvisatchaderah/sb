export default {
  // open_method
  open_method: {
    value: 'close',
    type: 'radio',
    options: [
      {
        label: 'Всегда открыт',
        value: 'open',
      },
      {
        label: 'Всегда закрыт',
        value: 'close',
      },
      {
        label: 'Открывается по таймауту',
        value: 'dynamic',
      },
    ],
  },
}
