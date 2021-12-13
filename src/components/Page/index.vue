<template>
  <!-- <div>{{ content[curIdx - 1] }}</div> -->
  <!-- <div>{{ this.$store.getters.content }}</div> -->
  <div>{{msg}}</div>
</template>


<script>
import { mapState } from "vuex";
import {mapGetters} from 'vuex'
export default {
  name: "Page",
  // 不在需要使用prop接受值
  // props: {
  //   curIdx: Number,
  // },
  computed: {
    //要注意其本身是一个计算函数，因此外部有一个括号包裹
    ...mapState({
      // 箭头函数可使代码更简练
      curIdx: (state) => state.curIdx,
      // 下面这种书写也可以
      // curIdx:'curIdx',
    }),
    // 当映射的计算属性的名称与 state 的子节点名称相同时，我们也可以给 mapState 传一个字符串数组
    // ...mapState(['curIdx'])
    // 由于下方已经存在了一个content数组，为了不重名我们需要修改一下这个getters返还的值名称为msg
    ...mapGetters({
      msg:'content'
    })
  },
  data() {
    return {
      // 根据prop接收的curIdx动态显示内容
      content: ["页面1", "页面2", "页面3", "页面4"],
    };
  },
};
</script>


<style scoped>
</style>