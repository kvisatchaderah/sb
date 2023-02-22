import FormBuilder from './form_builder/form_builder'
import { config_loader } from '@loaders'

config_loader().then((config) => new FormBuilder(config))
