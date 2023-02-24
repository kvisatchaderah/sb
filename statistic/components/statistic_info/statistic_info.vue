<template>
  <div class="statistics_info">
    <!-- header -->
    <div class="header">
      <h1>
        <span>
          {{ tabs[active_tab].all_quantity | add_num_separator }}
        </span>
        <span>
          {{ tabs[active_tab].after_value ? tabs[active_tab].after_value : '' }}
        </span>
      </h1>

      <div
        v-if="tabs.length > 1"
        class="tabs"
      >
        <span
          v-for="(tab, tab_index) in tabs"
          :key="tab_index"
          :class="{ 'font-weight-bolder': active_tab == tab_index }"
          class="tab"
          @click="active_tab = tab_index"
        >
          {{ tab.label }}
        </span>
      </div>
    </div>
    <!-- /header -->

    <hr v-if="info.length" />

    <!-- others -->
    <div
      v-for="(tab_data, index) in tabs_data[active_tab]"
      :key="index"
      class="other"
    >
      <!-- label -->
      <div class="label">
        <!-- name -->
        <span
          class="name"
          v-if="tab_data.id == 0"
        >
          {{ tab_data.name }}:
        </span>
        <span v-else>
          <router-link
            :to="'/apps/reports/discount/?&type=' + tab_data.id + '&' + times+'&show_first=1'"
            class="name"
          >
            {{ tab_data.name }}:
          </router-link>
        </span>
        <!-- /name -->

        <!-- value -->
        <span class="value">
          <span>
            {{ tab_data.value | add_num_separator }}
          </span>
          <span>
            {{
              tabs[active_tab].after_value ? tabs[active_tab].after_value : ''
            }}
          </span>
        </span>
        <!-- /value -->
      </div>
      <!-- /label -->

      <!-- grafic -->
      <div class="grafic">
        <span class="grafic_max_value"></span>
        <span
          class="grafic_current_value"
          :style="{
            width: tab_data.width,
          }"
        ></span>
      </div>
      <!-- /grafic -->
    </div>
    <!-- /others -->
  </div>
</template>

<script>
import script from './statistic_info.js'
export default script
</script>

<style lang="scss" scoped>
@import 'statistic_info.scss';
</style>
