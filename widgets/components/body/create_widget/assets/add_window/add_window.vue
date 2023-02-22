<template>
  <div class="add_window">
    <BButton
      variant="outline-info"
      class="add_window__button"
      @click="add_window"
    >
      <span> Добавить новое окно </span>
    </BButton>
  </div>
</template>

<script>
import script from './add_window.js'
export default script
</script>

<style lang="scss" scoped>
@import 'add_window.scss';
</style>
