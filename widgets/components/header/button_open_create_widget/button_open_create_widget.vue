<template>
  <BButton
    class="header_button"
    variant="outline-primary"
    @click="open_new_widget"
  >
    <span class="mx-50"> Новый виджет </span>
    <FeatherIcon
      icon="PlusIcon"
      :size="icon_size.m"
    />
  </BButton>
</template>

<script>
import script from './button_open_create_widget.js'
export default script
</script>

<style lang="scss" scoped>
@import 'button_open_create_widget.scss';
</style>
