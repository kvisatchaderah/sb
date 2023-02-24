import { widget_name } from '@assets'

const config_loader = () => {
  const config_url = document.getElementById(widget_name).dataset.config_url
  const base_url = config_url.match(/(.*\/\/[^/]*)\//)[1]

  return fetch(config_url)
    .then((response) => response.json())
    .then((data) => {
      data.config.base_url = base_url
      return data
    })
}

export default config_loader
