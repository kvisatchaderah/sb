<template>
  <vue-cal
    class="calendar vuecal--date-picker calendar-left vuecal--rounded-theme vuecal--green-theme"
    xsmall
    :events="events"
    hide-view-selector
    :time="false"
    locale="ru"
    :transitions="false"
    active-view="month"
    :disable-views="['week', 'day']"
    events-count-on-year-view
  />
</template>

<script>
import script from './calendar.js'
export default script
</script>

<style lang="scss" scoped>
@import 'calendar.scss';
</style>
