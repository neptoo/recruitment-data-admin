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
        color: function(params) {
          var colorList = [
            '#8CD790', '#78fee0', '#4bc2c5', '#9DC8C8', '#30A9DE', '#664968','#d9d9f3'
          ];
          return colorList[params.dataIndex]
        },
        title: {
          text: "工作经验要求",
          x: 'center',
          textStyle: {
            color: "#777",
            fontWeight:'500',
            fontSize:16
          }
        },
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
          data: ['应届生', '1年以内', '1-3年', '3-5年', '5-10年', '10年以上', '不限'],
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
          name: '工作经验',
          type: 'bar',
          barWidth: '60%',
          data: [18, 9, 177, 267, 158, 9, 97]
        }]
      });
    }
  }
}

</script>
<style scoped>
</style>
