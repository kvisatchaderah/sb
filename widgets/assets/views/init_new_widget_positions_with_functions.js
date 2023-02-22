import positions from './init_new_widget_positions'
import { deep_copy } from '@helpers'
import { sync_widget_positions } from '../functions/_functions'

export default {
  vertical: deep_copy(positions.vertical).map((option) => {
    option.functions = [sync_widget_positions()]
    return option
  }),

  horisontal: deep_copy(positions.horisontal).map((option) => {
    option.functions = [sync_widget_positions()]
    return option
  }),
}
