<template>
   <el-table :data="tableData" style="width: 100%" border stripe>
      <el-table-column prop="id"  label="ID"  width="60"></el-table-column>
      <el-table-column prop="userName" label="NAME" width="100"></el-table-column>
      <el-table-column prop="time" label="TIME" width="80"> </el-table-column>
      <!-- <el-table-column prop="ability" label="ABILITY"> </el-table-column> -->
      <el-table-column prop="submit" label="SUBMIT" align="right"> </el-table-column>
    </el-table>
</template>

<script>
    export default {
      data() {
        return {
          tableData: [{
            id:1,
            userName: '云丁网络',
            time: '5.30',
            ability: '技术类,研发类',
            submit:'http://yunding.cn/pc/zhaopin'
          },{
            id:2,
            userName: '朗新科技',
            time: '4.22',
            ability: '技术类,研发类,运营类,产品类',
            submit:'http://longshine.zhiye.com/Campus'
          }, {
            id:3,
            userName: '唯品会',
            time: '4.30',
            ability: '职能类',
            submit:'http://company.zheyibu.com/308261/'
          }, {
            id:4,
            userName: '恺英网络',
            time: '4.10',
            ability: '技术类,研发类',
            submit:'http://kingnet.cheng95.cn/position/'
          }, {
            id:5,
            userName: '360安全',
            time: '4.22',
            ability: '技术类,研发类',
            submit:'http://chrcmp.chinahr.com/pages/360safe/jobs1/'
          }, {
            id:6,
            userName: '旷视科技',
            time: '3.29',
            ability: '技术类,研发类,测试类,产品类',
            submit:'https://megvii.com/campus/graduate/'
          }, {
            id:7,
            userName: '中核武汉',
            time: '6.30',
            ability: '技术类,研发类,通信类',
            submit:'https://campus.liepin.com/xycompany/162727'
          }]
        }
      }
    }
</script>
<style scoped>
    
</style>
