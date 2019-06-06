<template>
  <div class="login">
    <el-row style="z-home: 1;height: 100%;">
      <el-card class="login-box" element-loading-background="rgba(0, 0, 0, 0.8)">
        <el-form ref="form" label-with="80px" @keyup.enter.native="login">
          <h3 class="title">招聘数据可视化系统</h3>
          <div class="login-wrap" v-show="showLogin">
            <p v-show="showTishi">{{tishi}}</p>
            <el-form-item prop="username">
              <el-input :autofocus="true" placeholder="请输入用户名" v-model="username">
                <template slot="prepend">
                  <i class="icon iconfont icon-denglu"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" placeholder="请输入密码" v-model="password">
                <template slot="prepend">
                  <i class="icon iconfont icon-denglumima"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="login" style="width: 100%">登录</el-button>
            </el-form-item>
            <span v-on:click="ToRegister" class="changeState">没有账号？马上注册</span>
          </div>
          <div class="register-wrap" v-show="showRegister">
            <p v-show="showTishi">{{tishi}}</p>
            <el-form-item prop="username">
              <el-input :autofocus="true" placeholder="请输入用户名" v-model="newUsername">
                <template slot="prepend">
                  <i class="icon iconfont icon-denglu"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item prop="password">
              <el-input type="password" v-model="newPassword" placeholder="请输入密码">
                <template slot="prepend">
                  <i class="icon iconfont icon-denglumima"></i>
                </template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary" v-on:click="register" style="width: 100%">注册</el-button>
            </el-form-item>
            <span v-on:click="ToLogin" class="changeState">已有账号？马上登录</span>
          </div>
        </el-form>
      </el-card>
    </el-row>
  </div>
</template>
<style scoped>
.login {
  background: url(../assets/login.jpg) no-repeat scroll center center / cover;
  background-size: 100% 100%;
  width: 100%;
  height: 100%;
  position: fixed;
}

.login-box {
  background: rgba(0, 0, 0, 0.4);
  border: none;
  width: 25%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
  -webkit-transform: translate3d(-50%, -50%, 0);
}

.login-box-msg {
  color: #ffffff;
  text-align: center;
}

.login-box .title {
  color: #ddd;
  padding-bottom: 4px;
  text-align: center;
}

.login-wrap,
.register-wrap {
  text-align: center;
}

p {
  color: red;
}

h3 {
  color: #999;
  text-align: center;
}

span {
  cursor: pointer;
}

span.changeState {
  color: #ccc;
  font-size: 16px;
}

span:hover {
  color: #41b883;
}

</style>
<script>
import { setCookie, getCookie } from '../assets/js/cookie.js'
export default {
  mounted() {
    /*页面挂载获取cookie，如果存在username的cookie，则跳转到主页，不需登录*/
    if (getCookie('username')) {
      this.$router.push('/home')
    }
  },
  data() {
    return {
      showLogin: true,
      showRegister: false,
      showTishi: false,
      tishi: '',
      username: '',
      password: '',
      newUsername: '',
      newPassword: ''
    }
  },
  methods: {
    register() {
      const { username, password, $router } = this;
      if (this.newUsername == "" || this.newPassword == "") {
        alert("请输入用户名或密码")
      } else if (!(/[a-zA-Z0-9]/.test(this.newPassword))) {
        alert("密码只能由数字、字母组成")
      }else {
        let data = { 'username': this.newUsername, 'password': this.newPassword }
        this.$http.post('/api/user/addUser', data).then((res) => {
          /*接口的传值是(-1,该用户已存在)*/
          if (res.data == -1) {
            this.tishi = "该账号已存在"
            this.showTishi = true
            this.username = ''
            this.password = ''
          } else if (res.status == 200) {
            this.tishi = "注册成功"
            this.showTishi = true
            this.username = ''
            this.password = ''
            /*注册成功之后再跳回登录页*/
            setTimeout(function() {
              this.showRegister = false
              this.showLogin = true
              this.showTishi = false
            }.bind(this), 2000)
          }
        })
      }
    },
    login() {
      const { username, password, $router } = this;
      if (this.username == "" || this.password == "") {
        alert("请输入用户名或密码")
      } else {
        let data = { 'username': this.username, 'password': this.password }
        /*接口请求*/
        this.$http.post('/api/user/selectUser', data).then((res) => {
          // console.log(res)
          /*接口的传值是(-1,该用户不存在),(0,密码错误)*/
          if (res.data == -1) {
            this.tishi = "该用户不存在"
            this.showTishi = true
          } else if (res.data == 0) {
            this.tishi = "密码输入错误"
            this.showTishi = true
          } else {
            // this.tishi = "登录成功"
            // this.showTishi = true
            setCookie('username', this.username, 1000 * 60)
            setTimeout(function() {
              this.$router.push('/home')
            }.bind(this), 1000)
          }
        })
      }
    },
    ToRegister() {
      this.showRegister = true
      this.showLogin = false
      this.showTishi = false
    },
    ToLogin() {
      this.showRegister = false
      this.showLogin = true
      this.showTishi = false
    }
  }
}

</script>
