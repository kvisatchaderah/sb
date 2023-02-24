<template>
  <section>
    <b-row
      v-if="todo"
      class="justify-content-center"
    >
      <b-col
        lg="6"
        sm="6"
      >
        <statistic-card-with-area-chart
          v-if="statistics.subscribersGained"
          icon="UsersIcon"
          :statistic="
            kFormatter(statistics.subscribersGained.analyticsData.subscribers)
          "
          statistic-title="Пациенты записанные на сегодня"
          :chart-data="statistics.subscribersGained.series"
        />
      </b-col>
      <b-col
        lg="6"
        sm="6"
        class="d-flex flex-column w-100"
      >
        <statistic-card-with-area-chart
          v-if="statistics.subscribersGainedNone"
          icon="UserMinusIcon"
          color="danger"
          class="h-100"
          :statistic="
            kFormatter(
              statistics.subscribersGainedNone.analyticsData.subscribers,
            )
          "
          statistic-title="Пациенты не пришли сегодня"
          :chart-data="statistics.subscribersGainedNone.series"
        />
      </b-col>
    </b-row>
    <b-row class="match-height">
      <b-col cols="12">
        <b-card no-body>
          <b-card-header>
            <!-- title and subtitle -->
            <div>
              <b-card-title class="mb-1"> Динамика звонков </b-card-title>
              <b-card-sub-title>
                <b-col
                  cols="12"
                  class="d-flex align-items-center"
                >
                  <v-select
                    v-model="type"
                    label="title"
                    class="w-100"
                    :clearable="false"
                    :options="crmAssest"
                    :reduce="(option) => option.title"
                    @input="getCallsData()"
                  />
                </b-col>
              </b-card-sub-title>
            </div>
            <!--/ title and subtitle -->

            <!-- datepicker -->
            <div class="d-flex align-items-center mr-2">
              <feather-icon
                icon="CalendarIcon"
                size="16"
              />
              <flat-pickr
                v-model="rangePicker"
                :config="{
                  dateFormat: 'Y-m-d h:i:S',
                  mode: 'range',
                  enableTime: true,
                  time_24hr: true,
                }"
                class="form-control flat-picker bg-transparent border-0 shadow-none"
                placeholder="YYYY-MM-DD hh:mm:ss"
                @on-close="getCallsData()"
              />
            </div>
            <!-- datepicker -->
          </b-card-header>
          <b-card-title
            v-if="!type"
            class="mb-1 mt-1 text-center"
          >
            Это тестовые данные, подключите CRM интеграцию!
          </b-card-title>
          <b-card-body>
            <vue-apex-charts
              type="area"
              height="600"
              :options="lineAreaChartSpline.chartOptions"
              :series="lineAreaChartSpline.series"
            />
          </b-card-body>
        </b-card>
      </b-col>
    </b-row>
  </section>
</template>

<script>
import {
  BCard,
  BCardBody,
  BCardHeader,
  BCardSubTitle,
  BCardTitle,
  BCol,
  BRow,
} from 'bootstrap-vue'
import VSelect from 'vue-select'
import StatisticCardWithAreaChart from '@core/components/statistics-cards/StatisticCardWithAreaChart.vue'
import VueApexCharts from 'vue-apexcharts'
import flatPickr from 'vue-flatpickr-component'
import axios from '@axios'
import { kFormatter } from '@core/utils/filter'
import Moment from 'moment'
import apexChatData from '../../../apexChartData'

export default {
  name: 'MainPage',

  components: {
    BCard,
    VSelect,
    BRow,
    BCol,
    VueApexCharts,
    BCardHeader,
    BCardBody,
    BCardTitle,
    BCardSubTitle,
    flatPickr,
    StatisticCardWithAreaChart,
  },
  props: {
    todo: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    const chartColors = {
      column: {
        series1: '#826af9',
        series2: '#d2b0ff',
        bg: '#f8d3ff',
      },
      success: {
        shade_100: '#7eefc7',
        shade_200: '#06774f',
      },
      donut: {
        series1: '#ffe700',
        series2: '#00d4bd',
        series3: '#826bf8',
        series4: '#2b9bf4',
        series5: '#FFA1A1',
      },
      area: {
        series3: '#a4f8cd',
        series2: '#60f2ca',
        series1: '#2bdac7',
      },
    }
    return {
      apexChatData,
      call: [],
      data: {},
      rangePicker: `${Moment()
        .startOf('month')
        .format('YYYY-MM-DD')} 00:00:00 to ${Moment()
        .endOf('month')
        .format('YYYY-MM-DD')} 23:59:59`,
      crmAssest: [],
      type: '',
      stats: [],
      statistics: {
        subscribersGained: {
          series: [
            {
              name: 'Subscribers',
              data: [10, 28, 35, 30, 50, 45, 65, 60],
            },
          ],
          analyticsData: {
            subscribers: 0,
          },
        },
        subscribersGainedNone: {
          series: [
            {
              name: 'SubscribersNone',
              data: [10, 12, 13, 14, 11, 16, 5],
            },
          ],
          analyticsData: {
            subscribers: 0,
          },
        },
        ordersRecevied: {
          series: [
            {
              name: 'Orders',
              data: [10, 15, 8, 15, 7, 12, 8],
            },
          ],
          analyticsData: {
            orders: 0,
          },
        },
      },
      lineAreaChartSpline: {
        series: [
          {
            name: 'Всего входящих',
            data: [
              100, 120, 90, 170, 130, 160, 140, 240, 220, 180, 270, 280, 375,
              375, 140, 240, 220, 180, 270,
            ],
          },
          {
            name: 'Принято',
            data: [60, 80, 70, 110, 80, 100, 90, 180, 160, 140, 200, 220, 275],
          },
          {
            name: 'Пропущенных',
            data: [20, 40, 30, 70, 40, 60, 50, 140, 120, 100, 140, 180, 220],
          },
        ],
        chartOptions: {
          chart: {
            toolbar: {
              show: false,
            },
          },
          dataLabels: {
            enabled: false,
          },
          stroke: {
            show: false,
            curve: 'straight',
          },
          legend: {
            show: true,
            position: 'top',
            horizontalAlign: 'left',
            fontSize: '14px',
            fontFamily: 'Montserrat',
          },
          grid: {
            xaxis: {
              lines: {
                show: true,
              },
            },
          },
          xaxis: {
            categories: [],
          },
          yaxis: {
            // opposite: isRtl
          },
          fill: {
            opacity: 1,
            type: 'solid',
          },
          tooltip: {
            shared: false,
          },
          colors: [
            chartColors.area.series3,
            chartColors.area.series2,
            chartColors.area.series1,
          ],
        },
      },
    }
  },
  created() {
    axios
      .post('/api/apps/reports/statistic/appointments', {
        type: 0,
        date: `${Moment().format('YYYY-MM-DD')} 00:00:00 to ${Moment().format(
          'YYYY-MM-DD 23:59:59',
        )}`,
      })
      .then((response) => {
        this.stats = response.data.appointments
        this.statistics.subscribersGained.analyticsData.subscribers =
          this.stats.find((el) => el.id === 9).count

        this.statistics.subscribersGainedNone.analyticsData.subscribers =
          this.stats.find((el) => el.id === 4).count
      })
      .catch((error) => console.error(error))
    let id = 0
    const promiseUise = axios
      .get('/api/apps/validate-settings?api=uis')
      .then((response) => {
        const { connect } = response.data
        if (connect) this.crmAssest.push({ id: ++id, title: 'uis' })
        return connect
      })
    const promiseBeeline = axios
      .get('/api/apps/validate-settings?api=beeline')
      .then((response) => {
        const { connect } = response.data
        if (connect) this.crmAssest.push({ id: ++id, title: 'beeline' })
        return connect
      })
    const promiseMango = axios
      .get('/api/apps/validate-settings?api=mango')
      .then((response) => {
        const { connect } = response.data
        if (connect) this.crmAssest.push({ id: ++id, title: 'mango' })
        return connect
      })
    Promise.any([promiseUise, promiseBeeline, promiseMango]).then((connect) => {
      if (this.crmAssest.length > 0) {
        this.type = this.crmAssest[0].title
        this.getCallsData()
      }
    })
  },
  methods: {
    kFormatter,

    getCallsData() {
      axios
        .post(`/api/apps/crm/uis/${this.type}/get.calls_report`, {
          date: this.rangePicker,
        })
        .then((response) => {
          this.calls = response.data
          this.toWorkFilters()
        })
        .catch((error) => console.error(error))
    },
    toWorkFilters() {
      function superSlicer(megaArr) {
        return megaArr.map((caller) => caller.start_time.slice(0, 10))
      }
      function superFilterFalse(megaArr) {
        const a = megaArr.filter((caller) => caller.is_lost === false)
        return superSlicer(a)
      }
      function superFilterTrue(megaArr) {
        const a = megaArr.filter((caller) => caller.is_lost === true)
        return superSlicer(a)
      }
      function calcCount(newArr) {
        const counts = []
        let i
        newArr.forEach((item) => {
          if (typeof counts[item] === 'undefined') counts[item] = 1
          else counts[item]++
        })
        const result = []
        for (i in counts) result.push(counts[i])
        return result
      }
      function calcDate(dateArr) {
        return dateArr.filter((item, index) => dateArr.indexOf(item) === index)
      }
      const allCallers = superSlicer(this.calls)
      const callersNoLost = superFilterFalse(this.calls)
      const callersLost = superFilterTrue(this.calls)
      const countAll = calcCount(allCallers)
      const newDate = calcDate(allCallers)
      const countLost = calcCount(callersLost)
      const countNoLost = calcCount(callersNoLost)

      this.lineAreaChartSpline.series = [
        {
          name: 'Всего входящих',
          data: countAll,
        },
        {
          name: 'Принято',
          data: countNoLost,
        },
        {
          name: 'Пропущенных',
          data: countLost,
        },
      ]
      this.lineAreaChartSpline.chartOptions = {
        xaxis: {
          categories: newDate,
        },
      }
    },
  },
}
</script>
<style lang="scss">
@import '@core/scss/vue/libs/vue-select.scss';
@import '@core/scss/vue/libs/vue-flatpicker.scss';
@import '@core/scss/vue/libs/chart-apex.scss';
</style>
