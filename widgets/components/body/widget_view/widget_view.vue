<template>
  <BCard>
    <div class="script_container">
      <div class="script_container__header">Код для вставки</div>

      <div class="script_container__button">
        <BButton
          variant="outline-primary"
          @click="copy_code"
        >
          Скопировать код
        </BButton>

        <BButton
          variant="outline-secondary"
          @click="append_script_node"
        >
          Показать виджет
        </BButton>
      </div>

      <div class="script_container__code">
        {{ script }}
      </div>

      <div class="script_container__comment">
        <p>Вставьте код в html сайта</p>
      </div>
    </div>
  </BCard>
</template>

<script>
import script from './widget_view.js'
export default script
</script>

<style lang="scss" scoped>
@import 'widget_view.scss';
</style>
