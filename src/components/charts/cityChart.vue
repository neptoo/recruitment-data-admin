<template>
  <div class="echarts">
    <div :style="{height:'400px',width:'100%'}" ref="myEchart"></div>
  </div>
</template>
<script>
var echarts = require('echarts/lib/echarts')
require('echarts/map/js/china')
export default {
  name: "echarts",
  props: ["userJson"],
  data() {
    return {
      chart: null
    };
  },
  mounted() {
    this.chinaConfigure();
  },
  beforeDestroy() {
    if (!this.chart) {
      return;
    }
    this.chart.dispose();
    this.chart = null;
  },
  methods: {
    chinaConfigure() {
      // console.log(this.userJson)
      let myChart = echarts.init(this.$refs.myEchart); //这里是为了获得容器所在位置    
      window.onresize = myChart.resize;
      myChart.setOption({ // 进行相关配置
        // backgroundColor: "#02AFDB",
        title: {
          text: "城市岗位分布",
          x: 'center',
          textStyle: {
            color: "#777",
            fontWeight:'500',
            fontSize:16
          }
        },
        tooltip: {}, // 鼠标移到图里面的浮动提示框
        dataRange: {
          show: false,
          min: 0,
          max: 1000,
          text: ['High', 'Low'],
          realtime: true,
          calculable: true,
          color: ['#FA8BFF', '#2BFF88', '#2BD2FF']
        },
        geo: { // 这个是重点配置区
          map: 'china', // 表示中国地图
          roam: false, // 是否允许缩放
          label: {
            normal: {
              show: true, // 是否显示对应地名
              textStyle: {
                color: 'rgba(0,0,0,0.4)'
              }
            }
          },
          itemStyle: {
            normal: {
              borderColor: 'rgba(0, 0, 0, 0.2)',
              areaColor: '#BBE4E9'
            },
            emphasis: {
              areaColor: null,
              shadowOffsetX: 0,
              shadowOffsetY: 0,
              shadowBlur: 20,
              borderWidth: 0,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          }
        },
        series: [{
            type: 'scatter',
            coordinateSystem: 'geo' // 对应上方配置
          },
          {
            name: '发布职位', // 浮动框的标题
            type: 'map',
            geoIndex: 0,
            data: [{
              "name": "北京",
              "value": 232
            }, {
              "name": "广东",
              "value": 318
            }, {
              "name": "上海",
              "value": 120
            }, {
              "name": "浙江",
              "value": 84
            }, , {
              "name": "四川",
              "value": 46
            }, {
              "name": "湖北",
              "value": 24
            }, {
              "name": "重庆",
              "value": 20
            }, {
              "name": "陕西",
              "value": 18
            }, {
              "name": "江苏",
              "value": 8
            }, {
              "name": "福建",
              "value": 20
            }, {
              "name": "辽宁",
              "value": 6
            }, {
              "name": "天津",
              "value": 4
            }, {
              "name": "云南",
              "value": 2
            }, {
              "name": "广西",
              "value": 2
            }]
          }
        ]
      })
    }
  }
}

</script>
