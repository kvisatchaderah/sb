<template>
  <div class="columns">
    <!-- column -->
    <div
      v-for="column in columns"
      :key="column.id"
      class="column"
      @click="
        $router.push({
          name: 'crm-requests',
          params: { selected_column: column.id },
        })
      "
    >
      <StatisticCardHorizontal
        :icon="column.icon"
        :color="column.background_color"
        :statistic="column.request_quantity"
        :statistic_title="column.name"
      />
    </div>
    <!-- /column -->
  </div>
</template>

<script>
import script from './columns.js'
export default script
</script>

<style lang="scss" scoped>
@import 'columns.scss';
</style>
