<template>
  <div class="radio">
    <div
      class="radio_elem"
      :class="{ '--active': option.value == value }"
      v-for="option in options"
      :key="option.value"
      @click="set_new_value(option.value)"
    >
      {{ option.label }}
    </div>
  </div>
</template>

<script>
import script from './radio.js'
export default script
</script>

<style lang="scss" scoped>
@import 'radio.scss';
</style>
