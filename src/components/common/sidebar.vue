<template>
    <div class="sidebar">
        <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" unique-opened router  background-color="#324157" text-color="#fff">
            <el-menu-item index="DashBoard">
               
                    <span class="sb-icon"><i class="icon iconfont icon-zhuye"></i></span>
                    <span class="sb-cn">首 页</span>
            </el-menu-item>

            <el-menu-item index="TodoList">
                <span class="sb-icon"><i class="icon iconfont icon-form"></i></span>
                <span class="sb-cn">待办清单</span>
            </el-menu-item>

            <el-submenu index="4">
                <template slot="title">
                    <span class="sb-icon"><i class="icon iconfont icon-tubiao"></i></span>
                    <span class="sb-cn">综合数据</span>
                </template>
                <el-menu-item index="BasicCharts">数据分析</el-menu-item>
                <el-menu-item index="JobChart">职位统计</el-menu-item>
            </el-submenu>

            <el-submenu index="5">
                <template slot="title">
                    <span class="sb-icon"><i class="icon iconfont icon-excel"></i></span>
                    <span class="sb-cn">图表管理</span>
                </template>
                <el-menu-item index="editTable">编辑图表</el-menu-item>
                <el-menu-item index="UploadExcel">上传图表</el-menu-item>
            </el-submenu>

           <!--  <el-menu-item index="editTable">
           
                <span class="sb-icon"><i class="icon iconfont icon-excel"></i></span>
                <span class="sb-cn">编辑图表</span>
            </el-menu-item> 

            <el-menu-item index="UploadExcel">
            
                <span class="sb-icon"><i class="icon iconfont icon-excel"></i></span>
                <span class="sb-cn">上传图表</span>
            </el-menu-item>  -->

            <el-menu-item index="Markdown">
             
                  <span class="sb-icon"><i class="icon iconfont icon-paper"></i></span>
                  <span class="sb-cn">编写简历</span>
            </el-menu-item>

            <!-- <el-menu-item index="ErrorPage">
             
                  <span class="sb-icon"><i class="icon iconfont icon-icon-test"></i></span>
                  <span class="sb-cn">错误页面</span>
            </el-menu-item> -->

        </el-menu>
    </div>
</template>
<script>
    export default {
        computed:{
            onRoutes(){
                return this.$route.path.replace('/','');
            }
        }
    }
</script>
<style scoped>
    .sidebar{
        display: block;
        position: absolute;
        width: 200px;
        left: 0;
        top: 66px;
        bottom:0;
       
    }
    .sidebar > ul {
        height:100%;
    }

   .el-menu-item, .el-submenu__title{
       font-size:14px;
   }
   
</style>
