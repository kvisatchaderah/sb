<template>
  <div class="widgets">
    <BCard
      v-for="widget in widgets"
      :key="widget.id"
      @click="open_widget(widget.id)"
    >
      <div class="widget">
        <div class="widget_header">
          <span>
            {{ widget.config_name ? widget.config_name : 'Без названия' }}
          </span>
          <span class="id">
            {{ widget.id }}
          </span>
        </div>

        <div class="widget_footer">
          {{ to_date(widget.updated_at) }}
        </div>
      </div>
    </BCard>
  </div>
</template>

<script>
import script from './widgets_list.js'
export default script
</script>

<style lang="scss" scoped>
@import 'widgets_list.scss';
</style>
