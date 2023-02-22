// styles
import './dev.sass'
import { widget_name } from '../form_builder/assets/_assets'

const scripts = document.getElementsByTagName('script')
const script = [...scripts].find((s) => s.src.includes('widget_init.js'))
script.id = widget_name
script.dataset.config_url = 'config.json'
script.dataset.recaptcha_public_key = '6Lcdn4MkAAAAAJYBnm_96JzVMXpDYQbFL5EnMQSG'
