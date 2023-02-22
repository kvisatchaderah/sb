<template>
  <div class="views_wrapper">
    <!-- header -->
    <BCard>
      <Header component_name="views" />

      <CreateWidgetElement
        label="Модель содержимого"
        :inputs="['new_widget.modifiers.mode']"
      />
    </BCard>
    <!-- /header -->

    <!-- windows -->
    <template v-if="is_relation_to('new_widget.modifiers.mode', 'standart')">
      <BCard>
        <Window window="new_widget.views.windows.0" />
      </BCard>
    </template>
    <!-- /windows -->

    <!-- windows -->
    <template v-if="!is_relation_to('new_widget.modifiers.mode', 'standart')">
      <template v-for="(window, window_index) in windows">
        <WindowHeader
          :label="`Окно ${window_index + 1}`"
          :key="'window_header_' + window_index"
        />

        <BCard :key="'b_card_' + window_index">
          <Window :window="`new_widget.views.windows.${window_index}`" />
        </BCard>
      </template>
    </template>
    <!-- /windows -->

    <!-- add-window -->
    <AddWindow
      v-if="!is_relation_to('new_widget.modifiers.mode', 'standart')"
      target="new_widget.views.windows"
      :push_value="[]"
    />
    <!-- /add-window -->

    <!-- footer -->
    <BCard>
      <FooterButtons without_hr />
    </BCard>
    <!-- /footer -->
  </div>
</template>

<script>
import script from './views.js'
export default script
</script>

<style lang="scss" scoped>
@import 'views.scss';
</style>
