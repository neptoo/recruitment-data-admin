<template>
   
      
<div>
     <input class="my-input" v-model="inputContent" placeholder="将要做什么"  v-on:keyup.enter="onEnter"/>
     <ul class="todolist">
         <li v-for="list in listContents">
               {{list.content}}
          </li>
      </ul>
</div>


</template>

<script>
    import vPageTitle from '../common/pageTitle.vue';
    
    

   
    export default {
        components:{
            vPageTitle
        },
        data(){
            return{
                inputContent:'',
                listContents:[
                    {content:'在深信服官网投递简历',isDone:false},
                    {content:'投递简历到字节跳动',isDone:false},
                    {content:'4.10号去武大双选会',isDone:false},
                    {content:'整理CVTE笔试题目',isDone:false},
                    {content:'牛客网刷真题',isDone:false},
                    {content:'准备英文简历',isDone:false},
                    {content:'4.8号中午三七互娱线上笔试',isDone:true}
                    
                ]
            }
        },
        
        methods: {
            onEnter:function(){
                
                if(this.inputContent!=''){
                 
                    var listContent={content:this.inputContent,isDone:true};
                    this.listContents.splice(0,0,listContent);
                    this.inputContent='';
                }
            }
        }
    }
</script>

<style>
    .el-col{
        margin-bottom:16px;
    }
    .todolist{
        margin-top:5px;
        list-style:none;
        border:1px solid #ccc;
        border-radius:6px;
    }
    .todolist li{
        transition:all 0.5s; 
        -moz-transition:all 0.5s; 
        -o-transition:all 0.5s; 
        -webkit-transition:all 0.5s; 
        line-height:20px;
        padding:10px;
        border-bottom:1px solid #ccc;
        cursor:pointer;
        border-left:5px solid #69CD93;
        text-align:left;
    }
    .todolist li:nth-child(2n){
          border-left:5px solid #0e8174;
    }

    .todolist li:hover{
        border-left:30px solid #69CD93;
        background-color:#eee;
    }
    .todolist li:nth-child(2n):hover{
        border-left:30px solid #0e8174;
    }
    .my-input{
        line-height:28px;
        border:1px solid #ccc;
        border-radius:6px;
        width:98%;
        padding:5px;
    }
    
 
    
</style>