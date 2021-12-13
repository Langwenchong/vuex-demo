// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'

Vue.config.productionTip = false

// 首先从store文件夹下引入store(默认回去index.js中获取)
// 因此这里路径写道文件夹即可
import store from '../store'

// 引入axios
import axios from 'axios';
// 挂载到vue原型链上
Vue.prototype.axios = axios;

// 引入这个对象
import Mock from '../mock'
// 加入init拦截函数
Mock.init();

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // 在这里挂在store对象
  store
})
