export default {
  // 用来定义修改state中数据的方法
  // 用来修改state中的curIdx
  // 默认第一个参数永远是state
  setCurIdx(state, idx) {
    state.curIdx = idx;
    //   z这种异步操作在mutations中要避免
    //   setTimeout(()=>{
    //     state.curIdx = idx;
    //   }, 1000)
  }
}
