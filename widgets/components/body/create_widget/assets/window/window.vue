<template>
  <div :key="component_key">
    <div
      v-if="form_window.length"
      class="form_window"
    >
      <!-- legend -->

      <!-- crm_relation -->
      <div class="legend">Связь с CRM</div>
      <!-- /crm_relation -->

      <!-- name -->
      <div class="legend">Имя поля формы</div>
      <!-- /name -->

      <!-- type -->
      <div class="legend">Тип значения</div>
      <!-- /type -->

      <!-- required -->
      <div class="legend">Обязательность</div>
      <!-- /required -->

      <!-- delete -->
      <div></div>
      <!-- /delete -->

      <!-- /legend -->

      <!-- form_elem -->
      <template v-for="(form_elem, index) in form_window">
        <!-- type -->
        <v-select
          v-model="form_elem.id"
          :key="'id' + index"
          :options="crm_data_types"
          :reduce="(v) => v.id"
          label="name"
          :clearable="false"
          @click="set_form_elem(index)"
        />
        <!-- /type -->

        <!-- crm form elem -->
        <template v-if="form_elem.id">
          <!-- name -->
          <span :key="'name' + index">
            {{ form_elem.name }}
          </span>
          <!-- /name -->

          <!-- type -->
          <span :key="'type' + index">
            {{ form_elem.type }}
          </span>
          <!-- /type -->

          <!-- required -->
          <div
            class="checkbox"
            :key="'checkbox' + index"
          >
            <b-form-checkbox
              v-model="form_elem.required"
              switch
              inline
            />
          </div>
          <!-- /required -->
        </template>
        <!-- /crm form elem -->

        <!-- not crm form elem -->
        <template v-else>
          <!-- name -->
          <f-input
            :key="'name' + index"
            :value="form_elem.name"
            type="text"
            placeholder="Имя поля формы"
          />
          <!-- /name -->

          <!-- type -->
          <v-select
            :key="'type' + index"
            v-model="form_elem.type"
            :options="data_types"
            label="name"
            :reduce="(v) => v.value"
            :clearable="false"
          />
          <!-- /type -->

          <!-- required -->
          <div
            class="checkbox"
            :key="'checkbox' + index"
          >
            <b-form-checkbox
              v-model="form_elem.required"
              switch
              inline
            />
          </div>
          <!-- /required -->
        </template>
        <!-- /not crm form elem -->

        <!-- delete -->
        <div
          :key="'delete' + index"
          class="delete text-danger"
          @click="delete_form_elem(index)"
        >
          <FeatherIcon
            icon="XIcon"
            :size="icon_size.l"
          />
        </div>
        <!-- /delete -->
      </template>
      <!-- /form_elem -->
    </div>

    <BButton
      variant="outline-primary"
      @click="add_new_form_elem"
    >
      Добавить поле формы
    </BButton>
  </div>
</template>

<script>
import script from './window.js'
export default script
</script>

<style lang="scss" scoped>
@import 'window.scss';
</style>
