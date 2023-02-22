<template>
  <b-form-checkbox
    v-model="value"
    switch
    inline
    @input="input_value"
  >
    <div>
      <span v-if="value && options.true">
        {{ options.true }}
      </span>
      <span v-else-if="options.false">
        {{ options.false }}
      </span>
    </div>
  </b-form-checkbox>
</template>

<script>
import script from './switch.js'
export default script
</script>

<style lang="scss" scoped>
@import 'switch.scss';
</style>
