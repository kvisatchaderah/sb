<template>
  <div>
    <!-- dezign -->
    <div
      v-if="active_step == 0"
      :class="steps[0]"
    >
      {{ dezigns }}

      <Buttons
        next
        @next="active_step++"
      />
    </div>
    <!-- /dezign -->

    <!-- value -->
    <div
      v-if="active_step == 1"
      :class="steps[1]"
    >
      {{ values }}

      <Buttons
        prev
        next
        @prev="active_step--"
        @next="active_step++"
      />
    </div>
    <!-- /value -->

    <!-- size -->
    <div
      v-if="active_step == 2"
      :class="steps[2]"
    >
      <div class="content">
        <div>
          <span>Ширина:</span>
          <span
            v-for="col in cols"
            :key="col"
            class="value"
            :class="{ __active: widget.col == col }"
            @click="widget.col = col"
          >
            {{ col }}
          </span>
        </div>

        <div>
          <span>Высота:</span>
          <span
            v-for="row in rows"
            :key="row"
            class="value"
            :class="{ __active: widget.row == row }"
            @click="widget.row = row"
          >
            {{ row }}
          </span>
        </div>
      </div>
      <Buttons
        prev
        add
        @prev="active_step--"
        @add="add_dynamic_widget"
      />
    </div>
    <!-- /size -->
  </div>
</template>

<script>
import script from './add_dynamic_widget.js'
export default script
</script>

<style lang="scss" scoped>
@import 'add_dynamic_widget.scss';
</style>
