<template>
  <div>
    <hr v-if="!without_hr" />

    <div
      class="footer_buttons"
      :class="{ '--first_page': !active_step }"
    >
      <!-- prev -->
      <BButton
        v-if="active_step"
        variant="outline-secondary"
        class="footer_button"
        @click="active_step--"
      >
        Предыдущая
      </BButton>
      <!-- /prev -->

      <!-- next -->
      <BButton
        v-if="active_step !== steps_length - 1"
        variant="primary"
        class="footer_button"
        @click="active_step++"
      >
        Следующая
      </BButton>
      <!-- /next -->

      <!-- submit -->
      <BButton
        v-else
        variant="info"
        class="footer_button"
        @click="submit"
      >
        Создать виджет
      </BButton>
      <!-- /submit -->
    </div>
  </div>
</template>

<script>
import script from './footer_buttons.js'
export default script
</script>

<style lang="scss" scoped>
@import 'footer_buttons.scss';
</style>
