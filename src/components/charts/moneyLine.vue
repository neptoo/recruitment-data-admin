<template>
  <div class="c-charts">
    <IEcharts :option="line"></IEcharts>
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
    line: {
      title: {
        text: "薪资待遇分布",
        left: "center"
      },
      tooltip: {
        trigger: 'axis',
        axisPointer: { // 坐标轴指示器，坐标轴触发有效
          type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
        },
        formatter: function(params) {
          return params[0].name +
            "<br>BOSS直聘：" + params[0].value +
            "<br>拉勾网：" + -params[1].value;
        }
      },
      legend: {
        data: ['拉勾网', 'BOSS直聘'],
        left: "right"
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis: [{
        type: 'value'
      }],
      yAxis: [{
        type: 'category',
        axisTick: { show: false },
        data: ['3k以下', '3k-5k', '5k-10k', '10k-15k', '15k-20k', '20k-30k', '30k-50k', '50k-80k','80k-100k','100k以上']
      }],
      series: [{
          name: '拉勾网',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true
            }
          },
          data: [3, 14, 134, 97, 79, 68, 39, 3, , ]
        },
        {
          name: 'BOSS直聘',
          type: 'bar',
          stack: '总量',
          label: {
            normal: {
              show: true,
              formatter: function(params) { return -params.value }
            }
          },
          data: [, , , , , -35, -227, -28, -1, -3]
        }
      ]
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
