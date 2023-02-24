<template>
  <div>
    <Title
      :title="title"
      :style="{
        height: `${title_height}px`,
      }"
    />

    <BCard
      class="bcard"
      :style="{ height: `calc(100% - ${title_height}px)` }"
    >
      <slot />
    </BCard>
  </div>
</template>

<script>
import script from './widget_wrapper.js'
export default script
</script>

<style lang="scss" scoped>
@import 'widget_wrapper.scss';
</style>
