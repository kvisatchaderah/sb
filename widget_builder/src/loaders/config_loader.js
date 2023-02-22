import { widget_name } from '@assets'

const config_loader = () => {
  const config_url = document.getElementById(widget_name).dataset.config_url

  return fetch(config_url)
    .then((response) => response.json())
    .then((data) => data.config)
}

export default config_loader
