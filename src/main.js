// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import App from './App';
import router from './router';
import ElementUI from 'element-ui';
//引入element-ui的默认CSS样式
import 'element-ui/lib/theme-chalk/index.css';

// 引用后才可使用this.$http.post
import VueResource from 'vue-resource'
Vue.use(VueResource)

Vue.use(ElementUI);
Vue.config.productionTip = false


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})
