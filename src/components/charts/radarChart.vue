<template>
  <div class="c-charts">
    <IEcharts :option="radar"></IEcharts>
  </div>
</template>
<script>
import vPageTitle from '../common/pageTitle.vue';
import IEcharts from 'vue-echarts-v3';
export default {
  components: {
    vPageTitle,
    IEcharts
  },
  data: () => ({
    radar: {
      title: {
        text: ''
      },

      tooltip: {

      },
      legend: {
        data: ['BOSS直聘', '拉勾网']
      },
      radar: {
        // shape: 'circle',

        indicator: [
          { name: '销售', max: 65 },
          { name: '设计', max: 160 },
          { name: '运营', max: 300 },
          { name: '前端', max: 380 },
          { name: 'Java', max: 520 },
          { name: '产品', max: 250 },
          { name: '行政', max: 250 }
        ]
      },
      series: [{
        name: 'BOSS vs LAGOU',
        type: 'radar',
        areaStyle: { normal: {} },
        data: [{
            itemStyle: { normal: { color: 'rgba(87, 188, 218, 0.4)' } },
            value: [43, 100, 280, 350, 500, 190, 200],
            name: 'BOSS直聘'
          },
          {
            itemStyle: { normal: { color: 'rgba(236, 119, 119, 0.7)' } },
            value: [50, 140, 280, 310, 420, 210, 160],
            name: '拉勾网'
          }
        ]
      }]
    }
  }),

  methods: {


  }
}

</script>
<style scoped>
.el-col {
  margin-bottom: 16px;
}

.material-icons {
  font-size: 80px;
  color: #ddd;
}

.cart-string {
  height: 100px;
  padding-top: 10px;
  font-size: 1.1rem;

}

.c-charts {
  height: 400px;
  width: 100%;
}

</style>
