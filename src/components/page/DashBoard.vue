<template>
    <div >
        <v-pageTitle vtitle="DashBoard"></v-pageTitle>

        <div class="clear"></div>


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart city-chart">
                    <companyPie></companyPie>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="12">
                <el-card class="box-chart">
                    <lineChart></lineChart>
                </el-card>
            </el-col>
            
        </el-row>



        <!--todoList  & mail & table-->
        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="24" :lg="8">
                <el-card class="box-list">
                    待办事项<hr>
                    <TodoList></TodoList>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="24" :lg="16">
                <el-card class="box-list">
                     <!-- BORDERED TABLE -->
                     网申截止时间表
                   <hr>
                   <timeTable></timeTable>
                </el-card>
            </el-col>

            <!-- <el-col :xs="24" :sm="24" :md="24" :lg="6">
                <el-card class="box-list">
                     Message List
                   <hr>
                   <MessageList></MessageList>
                </el-card>
            </el-col> -->
            
        </el-row>

    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import companyPie from '../charts/companyPie.vue';
    // import pieChart from '../charts/pieChart.vue';
    // import lineChart from '../charts/lineChart.vue';
    import lineChart from '../charts/lineChart.vue';
    import TodoList from '../todoList/TodoList.vue';
    import timeTable from '../tables/timeTable.vue';
    export default {
        data(){
           return{
              //percentage:10
           }
        },
        components:{
            vPageTitle,companyPie,lineChart,TodoList,timeTable
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
        text-align:center;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
    .box-card{
        height:110px;
    } 
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
    .box-chart{
        height:420px;
    }
    /*.city-chart{
        background: #b1c7cc;
    }*/
    .box-list{
        height:auto;
        text-align:left;
    }
    .box-list hr{
        height:1px;
        border:none;
        border-top:1px  dashed #ccc;
        margin-bottom:5px;
        margin-top:6px;

    }
</style>