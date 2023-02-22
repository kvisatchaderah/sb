// helpers
import { get_dynamic_class, classList_change } from '@v_helpers'

// assets
import { classes } from '@assets'

// export
export default {
  //
  // widget_button
  //

  // TODO переделать на вью модел
  // TODO добавить класс еррор инпуту

  on_widget_button() {
    const widget_active = classList_change(this.targets.widget)
    if (widget_active) this.set_recaptcha_token()
  },

  set_recaptcha_token() {
    grecaptcha.ready(() => {
      grecaptcha
        .execute(this.recaptcha_public_key, {
          action: 'submit',
        })
        .then((token) => {
          localStorage.setItem('token', token)
        })
    })
  },

  //
  // tree_label
  //

  on_tree_label(e) {
    const closest_window_wrapper = e.target.closest(
      get_dynamic_class(classes.window_wrapper)
    )
    classList_change(closest_window_wrapper)
  },

  //
  // submit prev next
  //

  // on_submit
  on_submit() {
    this.next_step(this.submit, null)
  },

  // submit
  submit() {
    const token = localStorage.getItem('token')
    fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=6Lcdn4MkAAAAAANpA8-wVqv7y9U1B4mxnQ_TWf6l&response=${token}`,
      {
        method: 'post',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
      .then((response) => response.json())
      .then((recaptcha_data) => {
        if (recaptcha_data.success && recaptcha_data.score > 0.5) {
          this.reset_windows_state()
          this.save_inputs_value()
          // TODO add submit tree working method
          this.on_widget_button()
        }
      })
  },

  // reset windows state
  reset_windows_state() {
    // reset active window
    this.active_window = 0

    // reset window active classes
    this.targets.windows.forEach((window) => {
      // tree mode
      const closest_window_wrapper = window.closest(
        get_dynamic_class(classes.window_wrapper)
      )
      if (closest_window_wrapper) {
        classList_change(closest_window_wrapper, 'remove')
      }

      // other modes
      classList_change(window, 'remove')
    })
  },

  // save_inputs_value
  save_inputs_value() {
    const data = this.targets.inputs
      .map((window_inputs) => {
        return window_inputs.map((input_object) => {
          const v = input_object.node.value
          input_object.node.value = ''

          return {
            name: input_object.node.placeholder,
            value: v,
            crm_id: input_object.crm_id,
          }
        })
      })
      .flat()

    console.log('submit: ', data)
  },

  // prev
  on_prev() {
    this.change_active(-1)
  },

  // next
  on_next() {
    this.next_step(this.change_active, 1)
  },

  // change active
  change_active(value) {
    classList_change(this.targets.windows[this.active_window])
    this.active_window += value
    classList_change(this.targets.windows[this.active_window])
  },

  //
  // next_step
  //

  next_step(next_step_method, next_step_args) {
    //
    // not first click
    //

    if (this.targets.inputs_listeners[this.active_window]) {
      next_step_method.call(this, next_step_args)
      return
    }

    //
    // first click
    //

    const current_inputs = this.targets.inputs[this.active_window]

    this.add_listener_to_inputs(current_inputs)
    this.set_valid_data_to_inputs(current_inputs)

    // do next method if values is valid
    if (this.targets.window_valids[this.active_window]) {
      next_step_method.call(this, next_step_args)
    }
  },

  //
  // on check valid
  //

  // add_listener_to_inputs
  add_listener_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      input.node.addEventListener('input', () => {
        this.check_valid(window_index, input_index)
        // TODO add debounce
      })
    })

    this.targets.inputs_listeners[this.active_window] = true
  },

  // check_valid_to_inputs
  set_valid_data_to_inputs(inputs) {
    const window_index = this.active_window

    inputs.forEach((input, input_index) => {
      this.check_valid(window_index, input_index)
    })
  },

  //
  // check_valid
  //

  // check_valid
  check_valid(window_index, input_index) {
    const current_input = this.targets.inputs[window_index][input_index]
    const current_value = current_input.node.value

    // count is valid
    let is_valid = true
    if (current_input.filters) {
      current_input.filters.forEach((filter, filter_index) => {
        const current_valid = filter.valid_method(current_value, filter.param)

        // set false validation
        if (!current_valid) {
          is_valid = false
        }

        // change error class if need
        classList_change(
          current_input.errors[filter_index],
          current_valid ? 'remove' : 'add'
        )
        current_input.valids[filter_index] = current_valid
      })
    }

    // set current input valid
    current_input.valid = is_valid

    // set disable to button
    const window_valid = this.get_window_valid()
    const current_next_button = this.get_current_next_button()

    classList_change(
      current_next_button,
      window_valid ? 'remove' : 'add',
      'disable_classes'
    )

    this.targets.window_valids[this.active_window] = window_valid
  },

  // get_window_valid
  get_window_valid() {
    let window_valid = true

    this.targets.inputs[this.active_window].forEach((input) => {
      if (!input.valid) {
        window_valid = false
      }
    })

    return window_valid
  },

  // get_current_next_button
  get_current_next_button() {
    return this.emitters.next[this.active_window] || this.emitters.submit[0]
  },
}
