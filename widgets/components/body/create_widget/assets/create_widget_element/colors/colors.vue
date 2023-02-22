<template>
  <div class="colors">
    <div
      class="colors_elem"
      :class="{ '--active': color == value }"
      v-for="color in colors"
      :key="color"
      @click="set_new_value(color)"
    >
      <div
        class="colors_elem_background"
        :style="'background-color: ' + color"
      >
        <FeatherIcon
          v-if="color == value"
          icon="CheckIcon"
          :size="icon_size.l"
        />
      </div>
    </div>
  </div>
</template>

<script>
import script from './colors.js'
export default script
</script>

<style lang="scss" scoped>
@import 'colors.scss';
</style>
