<template>
  <div class="icons">
    <div
      class="icons_elem"
      :class="{ '--active': icon == value }"
      v-for="icon in icons"
      :key="icon"
      @click="set_new_value(icon)"
    >
      <FeatherIcon
        :icon="icon"
        :size="icon_size.l"
      />
    </div>
  </div>
</template>

<script>
import script from './icons.js'
export default script
</script>

<style lang="scss" scoped>
@import 'icons.scss';
</style>
