<template>
  <div class="window_header">
    <h2>
      {{ label }}
    </h2>
  </div>
</template>

<style lang="scss" scoped>
@import 'frontend/src/views/apps/crm/widgets/assets/styles/_bundler.scss';

// window_header
.window_header {
  padding-left: $p;
  font-weight: bold;
  text-transform: uppercase;
  opacity: $op;
}
</style>

<script>
export default {
  // props
  props: ['label'],
}
</script>
