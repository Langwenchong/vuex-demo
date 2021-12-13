//默认引入index.js下的向外暴露的apis对象
// 引入这个这个包含了所有请求函数的对象
import apis from '../axios'

export default {
  // 异步操作
  // 注意第一个形参不是state而是context即this.$store因此后面可以跟commit调用mutattions中的函数
  updateCurIdx(context, idx) {
    setTimeout(() => {
      context.commit('setCurIdx', idx);
    }, 1000)
  },
  init(context) {
    // 调用它的initData()方法进行初始化
    apis.initData().then(res => {
      console.log(res)
      context.commit('setCurIdx', res.data.initData.curIdx)
    });
  }
}
