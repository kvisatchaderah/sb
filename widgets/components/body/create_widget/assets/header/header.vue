<template>
  <div class="header">
    <h2>
      <span :class="{ '--has-comment': step.comment }">
        {{ step.label }}
      </span>
    </h2>

    <div
      v-if="step.comment"
      class="comment"
    >
      {{ step.comment }}
    </div>
  </div>
</template>

<script>
import script from './header.js'
export default script
</script>

<style lang="scss" scoped>
@import 'header.scss';
</style>
