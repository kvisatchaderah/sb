import { widget_name } from '@assets'
const version = 'v=' + Math.round(10 ** 9 * Math.random())

const append_google_captcha_script = () => {
  const script_node = document.createElement('script')
  const recaptcha_public_key =
    document.getElementById(widget_name).dataset.recaptcha_public_key
  script_node.src = `https://www.google.com/recaptcha/api.js?render=${recaptcha_public_key}&${version}`
  script_node.type = 'text/javascript'

  document.body.append(script_node)
}

const append_widget_script = () => {
  const script_node = document.createElement('script')
  script_node.src = `/widget.js?${version}`
  script_node.type = 'text/javascript'

  document.body.append(script_node)
}

append_google_captcha_script()
append_widget_script()
