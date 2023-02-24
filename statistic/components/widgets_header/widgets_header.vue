<template>
  <Title
    title="Статистика"
    :date_begin.sync="date_begin"
    :date_end.sync="date_end"
    :enable_methods="[
      'today',
      'curent_month',
      'last_month',
      'last_kvartal',
      'select_time',
    ]"
    init_state="curent_month"
    @change_date="change_date"
  />
</template>

<script>
import script from './widgets_header.js'
export default script
</script>

<style lang="scss" scoped>
@import 'widgets_header.scss';
</style>
