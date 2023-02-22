<template>
  <div class="buttons">
    <BButton
      v-for="option in options"
      :key="option.value"
      :variant="option.value == value ? 'primary' : 'outline-secondary'"
      class="button"
      :class="{ '--not_active': option.value !== value }"
      @click="set_new_value(option.value)"
    >
      {{ option.label }}
    </BButton>
  </div>
</template>

<script>
import script from './buttons.js'
export default script
</script>

<style lang="scss" scoped>
@import 'buttons.scss';
</style>
