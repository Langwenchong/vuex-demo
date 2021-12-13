export default {
  //   形参和mutations类似，第一个永远是state,第二个是payload
  content(state) {
    return `当前显示的时第${state.curIdx}个标签对应的页面的内容`
  }
}
