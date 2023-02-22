// assets
import { emitters_template, widget_name } from '@assets'

// class
const NodeClass = class {
  // constructor
  constructor() {
    this.emitters = emitters_template
    this.targets = {}
    this.active_window = 0
    this.recaptcha_public_key =
      document.getElementById(widget_name).dataset.recaptcha_public_key
  }

  // create
  create(node_model) {
    const view = this.create_node(node_model)
    this.add_node(view)
  }
}

// mixins
import node_create from './node_create'
import node_targets from './node_targets'
import node_emits from './node_emits'
import node_emits_methods from './node_emits_methods'

Object.assign(
  NodeClass.prototype,
  node_create,
  node_targets,
  node_emits,
  node_emits_methods
)

// export
export default NodeClass
