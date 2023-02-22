// models
import InputModel from './models/input'
import WidgetModel from './models/widget'
import WidgetButtonsModel from './models/widget_buttons'
import WindowsModel from './models/windows'
import Overlay from './models/overlay'
import FormModel from './models/form_model'
import ButtonsModel from './models/buttons_'

// export
export default class {
  // constructor
  constructor(context) {
    this.value = null

    // models
    this.input_model = new InputModel(this, context)
    this.windows_model = new WindowsModel(this, context)
    this.buttons_model = new ButtonsModel(this, context)
    this.widget_buttons_model = new WidgetButtonsModel(this, context)
    this.overlay = new Overlay(this, context)
    this.form_model = new FormModel(this, context)
    this.widget_model = new WidgetModel(this, context)
  }

  // create
  create() {
    this.input_model.create()
    this.windows_model.create()
    this.buttons_model.create()
    this.widget_buttons_model.create()
    this.overlay.create()
    this.form_model.create()
    this.widget_model.create()

    this.value = this.widget_model.get()
  }

  // get
  get() {
    return this.value
  }
}
