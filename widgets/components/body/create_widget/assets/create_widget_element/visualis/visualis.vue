<template>
  <div
    class="visualis"
    :style="{ 'grid-template-columns': get_template_columns }"
  >
    <div
      v-for="(placeholder, index) in placeholders"
      :key="index"
      class="visual_element"
    >
      {{ placeholder }}
    </div>
  </div>
</template>

<script>
import script from './visualis.js'
export default script
</script>

<style lang="scss" scoped>
@import 'visualis.scss';
</style>
