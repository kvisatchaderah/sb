<template>
  <div class="create_widget_element">
    <!-- label -->
    <div
      v-if="label"
      class="inputs_label"
    >
      {{ label }}
    </div>
    <!-- /label -->

    <!-- !inputs_wrapper -->
    <div
      class="inputs_wrapper"
      :class="{ '--has_labels': labels }"
    >
      <!-- !standart mode -->
      <template v-if="!switch_wrapper.status">
        <template v-for="(composition_key, index) in composition_keys">
          <LabelView
            v-if="labels"
            :key="'label_' + index"
            :label="input_labels[index]"
          />

          <composition
            :key="'composition_' + index"
            :is="composition_key"
            :input="inputs[index]"
            :value_path="value_paths[index]"
          />
        </template>
      </template>
      <!-- /!standart mode -->

      <!-- switch mode -->
      <template v-if="switch_wrapper.status">
        <!-- switch_button -->
        <b-form-checkbox
          v-model="switch_wrapper.value.value"
          class="switch_button"
          switch
          inline
          @input="on_switch"
        >
          <span v-if="switch_wrapper.value.value">
            {{ switch_wrapper.true_label }}
          </span>
          <span v-else>
            {{ switch_wrapper.false_label }}
          </span>
        </b-form-checkbox>
        <!-- /switch_button -->

        <!-- true -->
        <template v-if="switch_wrapper.value.value">
          <template v-for="(composition_key, index) in composition_keys.true">
            <LabelView
              v-if="labels"
              :key="'label_' + index"
              :label="input_labels.true[index]"
            />

            <composition
              :key="'composition_' + index"
              :is="composition_key"
              :input="inputs.true[index]"
              :value_path="value_paths.true[index]"
            />
          </template>
        </template>
        <!-- /true -->

        <!-- false -->
        <template v-else>
          <template v-for="(composition_key, index) in composition_keys.false">
            <LabelView
              v-if="labels"
              :key="'label_' + index"
              :label="input_labels.false[index]"
            />

            <composition
              :key="'composition_' + index"
              :is="composition_key"
              :input="inputs.false[index]"
              :value_path="value_paths.false[index]"
            />
          </template>
        </template>
        <!-- /false -->
      </template>
      <!-- /switch mode -->
    </div>
    <!-- /!inputs_wrapper -->

    <!-- comment -->
    <div
      v-if="comment"
      class="comment"
    >
      {{ comment }}
    </div>
    <!-- /comment -->
  </div>
</template>

<script>
import script from './create_widget_element.js'
export default script
</script>

<style lang="scss" scoped>
@import 'create_widget_element.scss';
</style>
