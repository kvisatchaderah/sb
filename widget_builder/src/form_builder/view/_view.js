// modules
import CSSVars from './css_vars'
import NodeClass from './node_'

// export
export default class {
  constructor(base_url) {
    // modules
    this.css_vars = new CSSVars()
    this.node = new NodeClass(base_url)
  }
}
