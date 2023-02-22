<template>
  <div class="steps">
    <div class="steps__legend step_buttons">
      <div
        v-for="(step, step_index) in steps"
        :key="step.component_name"
        class="step_button"
        :class="{ '--active': step_actived(step_index) }"
        @click="change_active_step(step_index)"
      >
        <BAvatar
          :variant="step_actived(step_index) ? 'primary' : 'light-secondary'"
          rounded
          :size="1.8 * icon_size.m"
        >
          <FeatherIcon
            :icon="step.icon"
            :size="icon_size.m"
          />
        </BAvatar>

        <span>
          {{ step.label }}
        </span>
      </div>
    </div>
    <div class="steps__content">
      <keep-alive>
        <TransitionGroup name="fade">
          <component
            v-for="(step, step_index) in steps"
            :key="step_index"
            v-if="step_actived(step_index)"
            :is="steps[active_step].component_name"
          />
        </TransitionGroup>
      </keep-alive>
    </div>
  </div>
</template>

<script>
import script from './create_widget.js'
export default script
</script>

<style lang="scss" scoped>
@import 'create_widget.scss';
</style>
