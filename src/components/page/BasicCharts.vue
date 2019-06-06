<template>
    <div>
        <v-pageTitle vtitle="BasicCharts"></v-pageTitle>


        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="8" :lg="8">
                <el-card class="box-card">
                   <degreeChart></degreeChart> 
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="16" :lg="16">
                <el-card class="box-card">
                   <moneyLine></moneyLine>
                </el-card>
            </el-col>
        </el-row>

        <el-row :gutter="20">
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <cityChart></cityChart>
                </el-card>
            </el-col>
            <el-col :xs="24" :sm="24" :md="12" :lg="12">
                <el-card class="box-card">
                    <funnelChart></funnelChart>
                </el-card>
            </el-col>
            
        </el-row>

    </div>



</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    import degreeChart from '../charts/degreeChart.vue';
    import moneyLine from '../charts/moneyLine.vue';
    import cityChart from '../charts/cityChart.vue';
    import funnelChart from '../charts/funnelChart.vue';
   
    export default {
        components:{
            vPageTitle,degreeChart,moneyLine,cityChart,funnelChart
        },
        methods: {      
        }
    }
</script>

<style scoped>
    .el-col{
        margin-bottom:16px;
    }
    .material-icons{
        font-size:80px;
        color:#ddd;
    }
   
    .cart-string{
        height:100px;
        padding-top:10px;
        font-size:1.1rem;
        
    }
 
    
</style>