<template>
  <BCard>
    <Header component_name="special" />

    <CreateWidgetElement
      label="Отключить стили"
      comment="При включении этой галки виджет будет сформирован без всяких стилей. Только html и js"
      :inputs="['new_widget.special.no_style']"
    />

    <CreateWidgetElement
      label="Добавить к форме идентификаторы"
      comment="Индентификаторы добавятся к выбранным элементам формы"
      :switch="{
        false: 'Стандартные идентификаторы',
        true: 'Расширенные возможности',
      }"
      :labels="{
        false: ['id корневого элемента', 'id кнопки отправки'],
        true: [
          'ID корневого элемента',
          'Классы корневого элемента',
          'Классы корневого элемента, когда он открыт',
          'ID кнопки отправки',
          'Классы кнопки отправки',
        ],
      }"
      :inputs="{
        false: [
          'new_widget.special.widget__ids',
          'new_widget.special.submit__ids',
        ],
        true: [
          'new_widget.special.widget__ids',
          'new_widget.special.widget__classes',
          'new_widget.special.widget__active_classes',
          'new_widget.special.submit__ids',
          'new_widget.special.submit__classes',
        ],
      }"
    />

    <FooterButtons />
  </BCard>
</template>

<script>
import script from './special.js'
export default script
</script>

<style lang="scss" scoped>
@import 'special.scss';
</style>
