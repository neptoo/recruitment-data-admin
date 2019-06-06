<template>
  <div class="c-charts">
    <IEcharts :option="pie"></IEcharts>
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
    pie: {
      title: {
        text: '公司融资情况和所在地',
        x: 'center',
        textStyle: {
          color: "#777",
          fontWeight:'500',
          fontSize:16
        }
      },
      tooltip: {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
      },
      legend: {
        orient: 'vertical',
        left: 'left',
        data: ['未融资', '无需融资', 'A轮', 'B轮', 'C轮', 'D轮', '已上市']
      },
      series: [{
          name: '所在城市',
          type: 'pie',
          selectedMode: 'single',
          radius: [0, '48%'],
          center: ['50%', '55%'],
          label: {
            normal: {
              position: 'inner'
            }
          },
          // labelLine: {
          //   normal: {
          //     show: false
          //   }
          // },
          data: [{
              value: 113,
              name: '北京'
            },
            { value: 64, name: '广州'},
            { value: 40, name: '杭州'},
            { value: 83, name: '深圳'},
            { value: 55, name: '上海'}
          ]
        },
        {
          name: '公司情况',
          type: 'pie',
          radius: ['55%', '70%'],
          center: ['50%', '55%'],
          data: [
            { value: 90, name: '无需融资', itemStyle: { color: '#38617c' } },
            { value: 4, name: '未融资' },
            { value: 3, name: 'A轮' },
            { value: 13, name: 'B轮' },
            { value: 34, name: 'C轮' },
            { value: 109, name: '已上市', itemStyle: { color: '#5e88b5' } },
            { value: 45, name: 'D轮' }
          ],
          itemStyle: {
            emphasis: {
              shadowBlur: 10,
              shadowOffsetX: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
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
