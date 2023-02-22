<template>
  <b-form-checkbox
    v-model="value"
    switch
    inline
  >
    <div v-if="has_slot">
      <span v-if="value">
        {{ options.true }}
      </span>
      <span v-else>
        {{ options.false }}
      </span>
    </div>
  </b-form-checkbox>
</template>

<script>
import script from './select.js'
export default script
</script>

<style lang="scss" scoped>
@import 'select.scss';
</style>
