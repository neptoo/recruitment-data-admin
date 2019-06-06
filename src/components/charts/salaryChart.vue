<template>
  <div class="c-charts">
    <!--创建一个echarts的容器-->
    <div id="myChart" :style="{width: '100%',height:'400px'}"></div>
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
export default {
  mounted() {
    this.drawLine();
  },
  methods: {
    drawLine() {
      // 基于准备好的dom，初始化echarts实例
      let myChart = echarts.init(document.getElementById('myChart'))
      // 绘制图表
      myChart.setOption({
        title: {
          text: "薪资水平",
          x: 'center',
          textStyle: {
            color: "#777",
            fontWeight:'500',
            fontSize:16
          }
        },
        color: ['#35d6c3'],
        tooltip: {
          trigger: 'axis',
          axisPointer: { // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: [{
          type: 'category',
          data: ['3k以下', '3k-5k', '5k-10k', '10k-15k', '15k-20k', '20k-30k', '30k-50k', '50k以上'],
          axisTick: {
            alignWithLabel: true
          },
          axisLabel: {
            interval: 0,
            // rotate: -40
            // formatter: function(value) { //竖直显示
            //   return value.split("").join("\n");
            // }
            formatter: function(params, index) { //隔一行显示
              if (index % 2 != 0) {
                return '\n\n' + params;
              } else {
                return params;
              }
            }

          }
        }],
        yAxis: [{
          type: 'value'
        }],
        series: [{
          name: '行业情况',
          type: 'bar',
          barWidth: '60%',
          data: [10, 52, 200, 334, 390, 330, 220, 110]
        }]
      });
    }
  }
}

</script>
<style scoped>
</style>
