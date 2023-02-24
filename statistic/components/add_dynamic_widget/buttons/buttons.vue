<template>
  <div class="buttons">
    <BButton
      v-if="prev"
      class="button"
      variant="outline-secondary"
      @click="$emit('prev')"
    >
      <feather-icon
        icon="ChevronLeftIcon"
        :size="icon_size.s"
      />
      <span>Вернуться</span>
    </BButton>

    <BButton
      v-if="next"
      class="button"
      variant="outline-primary"
      @click="$emit('next')"
    >
      <feather-icon
        icon="ChevronRightIcon"
        :size="icon_size.s"
      />
      <span>Продолжить</span>
    </BButton>

    <BButton
      v-if="add"
      class="button"
      variant="outline-primary"
      @click="$emit('add')"
    >
      <feather-icon
        icon="ChevronRightIcon"
        :size="icon_size.s"
      />
      <span>Добавить виджет</span>
    </BButton>
  </div>
</template>

<script>
import script from './buttons.js'
export default script
</script>

<style lang="scss" scoped>
@import 'buttons.scss';
</style>
