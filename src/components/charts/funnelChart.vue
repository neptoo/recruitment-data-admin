<template>
  <div class="c-charts">
    <IEcharts :option="funnel"></IEcharts>
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
    funnel: {
      title: {
        text: '',

      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c}%"
      },
      toolbox: {
        feature: {

        }
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['BOSS直聘', '拉勾网', '牛客网', '校招官网', '微信']
      },
      calculable: true,
      series: [{
        name: '漏斗图',
        type: 'funnel',
        left: '20%',
        top: 70,
        //x2: 80,
        bottom: 30,
        width: '70%',
        // height: {totalHeight} - y - y2,
        min: 0,
        max: 100,
        minSize: '0%',
        maxSize: '100%',
        sort: 'descending',
        gap: 2,
        label: {
          normal: {
            show: true,
            position: 'inside'
          },
          emphasis: {
            textStyle: {
              fontSize: 20
            }
          }
        },
        labelLine: {
          normal: {
            length: 10,
            lineStyle: {
              width: 1,
              type: 'solid'
            }
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#fff',
            borderWidth: 1
          }
        },
        data: [
          { value: 100, name: 'BOSS直聘', itemStyle: { normal: { color: '#4cb1a7' } } },
          { value: 80, name: '拉勾网', itemStyle: { normal: { color: '#57bcda' } } },
          { value: 60, name: '牛客网', itemStyle: { normal: { color: '#e5c649' } } },
          { value: 40, name: '校招官网', itemStyle: { normal: { color: '#ec7777' } } },
          { value: 20, name: '微信', itemStyle: { normal: { color: '#489e95' } } }
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
