<template>
  <div class="grids">
    <!-- WidgetsHeader -->
    <WidgetsHeader />
    <!-- /WidgetsHeader -->

    <!-- Columns -->
    <Columns />
    <!-- /Columns -->

    <!-- discounts -->
    <WidgetWrapper
      v-if="discounts.length"
      title="Статистика по акциям"
      class="row_3 md:col_4"
    >
      <StatisticInfo
        :info="discounts"
        :times="times"
        :tabs="[
          {
            label: 'Заявки',
            name_key: 'name',
            filter: false,
            value_key: 'value',
            after_value: false,
          },
          {
            label: 'Доход',
            name_key: 'name',
            filter: false,
            value_key: 'money',
            after_value: $store.state.app.currency_sign,
          },
        ]"
      />
    </WidgetWrapper>
    <!-- /discounts -->

    <!-- funnel -->
    <WidgetWrapper
      v-if="funnel"
      title="Воронка"
      class="md:col_8"
    >
      <FEchart
        type="funnel-expected-real"
        :data="funnel"
      />
    </WidgetWrapper>
    <!-- /funnel -->

    <!-- create -->
    <WidgetWrapper
      v-if="create_requests"
      title="Создано заявок"
      class="md:col_4"
    >
      <StatisticInfo
        :info="create_requests"
        :tabs="[
          {
            label: 'Заявок',
            name_key: 'creator_id',
            filter: get_employee_name,
            value_key: 'value',
            after_value: false,
          },
        ]"
      />
    </WidgetWrapper>
    <!-- /create -->

    <!-- arhive -->
    <WidgetWrapper
      v-if="arhive_requests"
      title="Архивировано заявок"
      class="md:col_4"
    >
      <StatisticInfo
        :info="arhive_requests"
        :tabs="[
          {
            label: 'Заявок',
            name_key: 'creator_id',
            filter: get_employee_name,
            value_key: 'value',
            after_value: false,
          },
        ]"
      />
    </WidgetWrapper>
    <!-- /arhive -->

    <!-- calendar -->
    <WidgetWrapper
      v-if="calendar_events"
      title="Календарь записей"
      class="md:col_4"
    >
      <Calendar />
    </WidgetWrapper>
    <!-- /calendar -->

    <!-- doctor_events -->
    <WidgetWrapper
      v-if="doctor_events"
      title="Запись врачей"
      class="md:col_4"
    >
      <StatisticInfo
        :info="doctor_events"
        :tabs="[
          {
            label: 'Заявок',
            name_key: 'user_id',
            filter: get_employee_name,
            value_key: 'value',
            after_value: false,
          },
        ]"
      />
    </WidgetWrapper>
    <!-- /doctor_events -->

    <!-- Dashboard -->
    <Dashboard />
    <!-- /Dashboard -->
  </div>
</template>

<script>
import script from './statistic.js'
export default script
</script>

<style lang="scss" scoped>
@import 'statistic.scss';
</style>
