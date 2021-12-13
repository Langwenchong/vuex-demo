import axios from "axios";
import Vue from "vue";
import Vuex from 'vuex'


// 由于是插件，因此需要将其挂载到vue上
Vue.use(Vuex)

// 引入各个属性对象
import state from './state';
import getters from './getters'
import mutations from './mutations'
import actions from './actions'
// 引入counter1和counter2两个模块
import counter1 from './counter1'
import counter2 from './counter2'
// 注意返还的是一个vuex的仓库对象
export default new Vuex.Store({
  // 里面包含之前介绍的几个属性
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
  modules: {
    // 分模块引入
    counter1,
    counter2,
  }
})
