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
    //用来给suc赋值
    return true;
  },
  init(context) {
    // 调用它的initData()方法进行初始化
    apis.initData().then(res => {
      // console.log(res)
      context.commit('setCurIdx', res.data.initData.curIdx);
    });
  },
  hello() {
    //嵌套在最外面
    return new Promise((resolve, reject) => {
      // 1s以后执行打印操作，然后返还success给suc赋值
      setTimeout(() => {
        console.log(`hello`);
        //手动加入执行完成后的resolve函数
        // 这样后面的then可以捕捉到继续执行函数
        resolve("success");
      }, 1000);
    })
  }
}
