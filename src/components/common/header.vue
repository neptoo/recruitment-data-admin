<template>
    <div class="header">
        <el-row :gutter="10">
            <!--Logo area-->
            <el-col :xs="12" :sm="12" :md="4">
                <div class="logo">  
                    <!-- <span class="logo_prefix">招聘数据可视化</span> -->
                    <span class="logo_suffix">招聘数据可视化</span>
                </div>
            </el-col>

            <!--Search area-->    
            <el-col :xs="12" :sm="12" :md="8">
                <div class="search">
                    
                </div> 
            </el-col>
            <!-- header right area-->
            <el-col :xs="24" :sm="12" :md="4">
                <div class="website">
                    <span>欢迎访问 </span>
                    <span> {{name}} </span>
                </div>
            </el-col>
 

           <el-col :xs="8" :sm="8" :md="{span:2,offset: 4}" >
                <div class="header-right">
                   <el-col :span="10">

                        <!--这是消息的下拉列表 用了element里的 dropdown组件-->                
                        <el-dropdown menu-align="start" >
                            <span>
                                <el-badge :value="tasks.length" class="item">
                                    <i class="el-icon-message"></i>
                                </el-badge>
                            </span>
                            <el-dropdown-menu slot="dropdown" >
                                <el-dropdown-item >
                                <span class="pop-title">You have new messages! </span>
                                </el-dropdown-item>
                                <el-dropdown-item v-for="task in tasks" :key="task.id" divided>
                                    <div class="task-div">
                                        <span class="task-span task-content">
                                        {{task.content}}<br/>
                                        <span class="task-time">时间：{{task.overTime}}</span>
                                        </span>
                                    </div>
                                </el-dropdown-item>

                            </el-dropdown-menu>
                        </el-dropdown>
                     </el-col>

                </div>
            
         </el-col>


         <el-col :xs="8" :sm="8" :md="2" >
            <div class="user-header">
                <el-dropdown menu-align="start">
                    <img src="../../assets/head2.jpg" />
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item >
                            <div class="setting-div">
                                <span class="setting-icon"><i class="icon iconfont icon-zhuye"></i></span> 
                                <span class="setting-string">Profie个人</span>
                            </div>
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <div class="setting-div">
                                <span class="setting-icon"><i class="el-icon-setting"></i></span>
                                <span class="setting-string">Setting设置</span>
                            </div>
                         
                        </el-dropdown-item>
                        <el-dropdown-item divided>
                            <div class="setting-div" @click="quit">
                                <span class="setting-icon"><i class="el-icon-delete"></i></span> 
                                <span class="setting-string">Exit退出</span>
                            </div>
                            
                        </el-dropdown-item>
                        
                    </el-dropdown-menu>
                </el-dropdown>


            </div>


         </el-col>
        </el-row> 


    </div>
    
</template>

<script>
/*引入公共方法*/
import { setCookie, getCookie, delCookie } from '../../assets/js/cookie.js'
export default {
  data() {
    return {
      name: 'admin',
      tasks:[
          {id:1,rank:1,content:'毕业设计论文终于写完了，快来查重吧~',overTime:'37min前'},
          {id:2,rank:2,content:'完成招聘数据可视化系统登录首页的编写。',overTime:'2019/3/20'},
          {id:3,rank:3,content:'尽快提交毕业设计论文题目给导师！',overTime:'2018/12/25'}
      ]     
    }
  },
  mounted() {
    /*页面挂载获取保存的cookie值，渲染到页面上*/
    let uname = getCookie('username')
    this.name = uname
    /*如果cookie不存在，则跳转到登录页*/
    if (uname == "") {
      this.$router.push('/')
    }
  },
  methods: {
    quit() {
      /*删除cookie*/
      delCookie('username')
      this.$router.push('/')
    },
    search() {
      alert('暂时无法搜索...')
    }
  }
}

</script>

<style scoped>
    .header {
        position: fixed;
        box-sizing: border-box;
        width: 100%;
        height:66px;
       
        font-size: 14px;
        line-height: 66px;
        background-color:#324157;
        box-shadow:2px 0 3px rgba(0,0,0,.5);
        z-index:1000;
        padding:0 32px 0 40px;
        overflow:hidden;
       
    }
    .header .logo{
        float: left;
        cursor:pointer;
        font-size: 22px;
    }
    .logo_prefix{
        color:#209e91;
    }
    .header .search{
        float: left;
        color:#fff;
        font-size:14px;
    }
    .website span{
        display:inline-block;
        color:#209e91;
    }
    .website span:first-child{
        color:#fff;
    }
    .header-right{
        padding-top:25px;
        line-height:10px;
    }
    .header-right span{
        display:inline-block;
        margin-left:14px;
        font-size:18px;
        color:#fff;
        line-height:1px;
        height:18px;
        cursor:pointer;

    }
    .header-right span:hover{
        color:#209e91;

    }
    .user-header{
        line-height:10px;
        padding-top:7px;
        font-size:12px;
    }
    .user-header img{
        border-radius:50%;
        cursor:pointer;
        width: 60px;
        height: 50px;
    }
    .task-div{
        clear:both;
        height:55px;
    }
    .task-span{
        display:block;
        float:left;
        font-size:12px
    }
    
    .task-content{  
        width:160px;
        line-height:16px;
        margin-left:10px;
        padding:5px;
    }
    .task-time{
        clear:both;
        float:right;
        color:#ccc;
        
    }
    .setting-div{
        height:30px;
        line-height:30px;
        clear:both;
    }
    .setting-div span{
        display:block;
        float:left;
    }
    .setting-icon{
        padding-top:3px;
        padding-right:3px;
        font-size: 16px;
    }
    .setting-string{
      font-size: 12px;
    }
    @media screen and (min-width: 1001px){
        .logo_suffix{
          color: #fff;
        }
    }
    @media screen and (max-width: 1000px){
        .logo_suffix{
          display: none;
        }
    }


</style>
