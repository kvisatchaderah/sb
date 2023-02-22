// use
import { store_name } from '@/views/apps/crm/widgets/assets/views/_settings'
import { use_store_computeds } from '@uses'

// export
export default () => {
  const is_relation_to = (computed_key, compare_value = 'null') => {
    const { computed_value } = use_store_computeds(store_name, {
      computed_value: computed_key,
    })

    return computed_value.value.value == compare_value
  }

  // return
  return {
    is_relation_to,
  }
}
