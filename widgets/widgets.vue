<template>
  <div>
    <!-- header -->
    <component
      v-if="active_component"
      :is="get_active_component_header"
    />
    <!-- /header -->

    <!-- body -->
    <component
      v-if="active_component"
      :is="get_active_component_body"
    />
    <!-- /body -->
  </div>
</template>

<script>
import script from './widgets.js'
export default script
</script>

<style lang="scss" scoped>
@import 'widgets.scss';
</style>
