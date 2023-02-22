<template>
  <BButton
    class="header_button"
    variant="outline-secondary"
    @click="open_widgets_list"
  >
    <span class="mx-50"> Список виджетов </span>
    <FeatherIcon
      icon="ListIcon"
      :size="icon_size.m"
    />
  </BButton>
</template>

<script>
import script from './button_open_widget_list.js'
export default script
</script>

<style lang="scss" scoped>
@import 'button_open_widget_list.scss';
</style>
