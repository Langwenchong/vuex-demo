import mutations from "./mutations";
import state from "./state";

// 要注意返还仅仅是一个对象，而不是new Vuex.store
// Vuex.store只会有一个
export default {
  //开启命名空间。那么调用它的属性时需要加上名字前缀counter2
  namespaced: true,
  state: state,
  mutations: mutations,
}
