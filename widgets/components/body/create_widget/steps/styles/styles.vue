<template>
  <BCard>
    <Header component_name="styles" />

    <CreateWidgetElement
      label="Имя виджета"
      :inputs="['new_widget.vue.widget_name']"
    />

    <CreateWidgetElement
      label="Шаблон открытия"
      :inputs="['new_widget.scrypts.open_method']"
    />

    <CreateWidgetElement
      label="Способ открытия виджета"
      :inputs="['new_widget.modifiers.open_template']"
    />

    <!-- Положение виджета -->
    <CreateWidgetElement
      label="Положение виджета"
      :inputs="['new_widget.modifiers.widget_side']"
    />

    <CreateWidgetElement
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.modifiers.widget_position.variants'],
        true: ['new_widget.modifiers.widget_position.hand_value'],
      }"
      :values="['new_widget.modifiers.widget_position']"
    />

    <CreateWidgetElement
      label="Положение кнопки вызова формы"
      :inputs="['new_widget.vue.widget_sync']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.widget_sync', false)"
      :inputs="['new_widget.modifiers.widget_button_side']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.widget_sync', false)"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.modifiers.widget_button_position.variants'],
        true: ['new_widget.modifiers.widget_button_position.hand_value'],
      }"
      :values="['new_widget.modifiers.widget_button_position']"
    />
    <!-- /Положение виджета -->

    <CreateWidgetElement
      label="Кнопка закрытия виджета"
      comment="Определяет положение кнопки закрытия виждета относительно виджета"
      :inputs="['new_widget.modifiers.widget_button_close_position']"
    />

    <CreateWidgetElement
      label="Стилистика"
      comment="Выбор заданной стилистики виджета"
      :inputs="['new_widget.vue.current_style']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет заднего фона"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.background_color.variants'],
        true: ['new_widget.vars.background_color.hand_value'],
      }"
      :values="['new_widget.vars.background_color']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет шрифта"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.font_color.variants'],
        true: ['new_widget.vars.font_color.hand_value'],
      }"
      :values="['new_widget.vars.font_color']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Степень непрозрачности вторичных элементов (скролл и подписи)"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.base_opacity.variants'],
        true: ['new_widget.vars.base_opacity.hand_value'],
      }"
      :values="['new_widget.vars.base_opacity']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Округлость границ"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.base_border_radius.variants'],
        true: ['new_widget.vars.base_border_radius.hand_value'],
      }"
      :values="['new_widget.vars.base_border_radius']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Размер шрифта"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.font_size.variants'],
        true: ['new_widget.vars.font_size.hand_value'],
      }"
      :values="['new_widget.vars.font_size']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Размер шрифта в кнопке виджета"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.widget_button_font_size.variants'],
        true: ['new_widget.vars.widget_button_font_size.hand_value'],
      }"
      :values="['new_widget.vars.widget_button_font_size']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Вариант кнопок"
      :inputs="['new_widget.modifiers.buttons_variant']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Вариант кнопок"
      :inputs="['new_widget.modifiers.widget_button_direction']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Подписи (label)"
      :inputs="['new_widget.modifiers.labels']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Отношение полей label-ов к input-ам"
      comment="Определяется относительно друг друга. При 1 и 1, каждая из сущностей займет по 50% ширины виджета"
      :labels="['Ширина label-ов', 'Ширина input-ов', 'Визаулизация']"
      :inputs="[
        'new_widget.vars.label_size',
        'new_widget.vars.input_size',
        'new_widget.vue.label_input_sizes_vizualization',
      ]"
    />

    <!-- TODO add component to vizualization label_size / input_size -->

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Обрезание подписей (label)"
      comment="Если включено, текст подписи будет обрезаться при переполнении контента"
      :inputs="['new_widget.modifiers.labels_overflow']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Подсказки (placeholder)"
      :inputs="['new_widget.modifiers.placeholders']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Тени"
      :inputs="['new_widget.modifiers.shadows']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Ширина виджета"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.widget_width.variants'],
        true: ['new_widget.vars.widget_width.hand_value'],
      }"
      :values="['new_widget.vars.widget_width']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Стандартное расстояние между элементами"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.base_distance.variants'],
        true: ['new_widget.vars.base_distance.hand_value'],
      }"
      :values="['new_widget.vars.base_distance']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Величина иконки в кнопке виджета"
      comment="Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.widget_button_icon_size.variants'],
        true: ['new_widget.vars.widget_button_icon_size.hand_value'],
      }"
      :values="['new_widget.vars.widget_button_icon_size']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Ширина скролла"
      comment="Определяет ширину скролла на виджете, если будет переполнение по высоте. Если заполнен вариант вручную, то будет применен он"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.scroll_border_width.variants'],
        true: ['new_widget.vars.scroll_border_width.hand_value'],
      }"
      :values="['new_widget.vars.scroll_border_width']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет кнопки подтверждения"
      comment="Используется для кнопки отправки или при выборе варианта виджета 'квиз'"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.button_next_color.variants'],
        true: ['new_widget.vars.button_next_color.hand_value'],
      }"
      :values="['new_widget.vars.button_next_color']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет кнопки подтверждения при введении неверных данных"
      comment="Используется при выборе варианта виджета 'квиз'"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.button_disable_color.variants'],
        true: ['new_widget.vars.button_disable_color.hand_value'],
      }"
      :values="['new_widget.vars.button_disable_color']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет кнопки возврата назад"
      comment="Используется при выборе варианта виджета 'квиз'"
      :switch="{
        false: 'Выбрать из предложенных вариантов',
        true: 'Задать вручную',
      }"
      :inputs="{
        false: ['new_widget.vars.button_prev_color.variants'],
        true: ['new_widget.vars.button_prev_color.hand_value'],
      }"
      :values="['new_widget.vars.button_prev_color']"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Цвет заднего фона"
      comment="Если поле текста оставить пустым - то кнопка будет без текста. Для того, чтобы сгенерировать виджет без иконок - выберите вариант пустой иконки"
      :labels="[
        'Текст кнопки открытия',
        'Иконка кнопки открытия',
        'Текст кнопки закрытия',
        'Иконка кнопки закрытия',
      ]"
      :inputs="[
        'new_widget.views.widget_button_open_text',
        'new_widget.views.widget_button_open_icon',
        'new_widget.views.widget_button_close_text',
        'new_widget.views.widget_button_close_icon',
      ]"
    />

    <CreateWidgetElement
      v-if="is_relation_to('new_widget.vue.current_style')"
      label="Регистр текста"
      comment="Возможность изменения регистра для разных элементов виджета. По умолчанию функция отключена и вместо её использования вы можете сразу писать содержимое виджета в нужном вам регистре"
      :labels="[
        'Заголовок группы кнопок',
        'Подписи (label)',
        'Подсказки (placeholder)',
        'Кнопки виджета',
        'Сообщения об ошибке',
      ]"
      :inputs="[
        'new_widget.modifiers.tree_labels_transform',
        'new_widget.modifiers.labels_transform',
        'new_widget.modifiers.placeholders_transform',
        'new_widget.modifiers.widget_buttons_transform',
        'new_widget.modifiers.errors_transform',
      ]"
    />

    <FooterButtons />
  </BCard>
</template>

<script>
import script from './styles.js'
export default script
</script>

<style lang="scss" scoped>
@import 'styles.scss';
</style>
