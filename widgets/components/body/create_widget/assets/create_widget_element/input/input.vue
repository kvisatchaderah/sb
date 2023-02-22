<template>
  <b-form-input
    class="input"
    v-model="value"
    :type="type"
    :placeholder="placeholder"
    @input="input_value"
  >
  </b-form-input>
</template>

<script>
import script from './input.js'
export default script
</script>

<style lang="scss" scoped>
@import 'input.scss';
</style>
