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
        text: '学历情况',
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
        data: ['博士', '硕士', '本科', '大专', '不限']
      },
      series: [{
          name: '学历要求',
          type: 'pie',
          selectedMode: 'single',
          // radius: ['50%', '68%'],
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
              value: 3,
              name: '博士'
            },
            {
              value: 31,
              name: '硕士'
            },
            { value: 257, name: '本科'},
            {
              value: 3,
              name: '大专'
            }
          ]
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
