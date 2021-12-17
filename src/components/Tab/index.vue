<template>
  <div>
    <!-- 不在使用prop而是使用this.$store.state.curIdx获取 -->
    <!-- 由于vue中template无需使用this -->
    <!-- 因此直接使用$store.state.curIdx即可 -->
    <!-- 由于setCurIdx已经映射为了自己的方法因此直接调用即可 -->
    <a
      href="javascript:;"
      @click="updateCurIdx(1)"
      :class="[{ current: $store.state.curIdx === 1 }]"
    >
      选项1</a
    >
    <a
      href="javascript:;"
      @click="updateCurIdx(2)"
      :class="[{ current: $store.state.curIdx === 2 }]"
    >
      选项2</a
    >
    <a
      href="javascript:;"
      @click="updateCurIdx(3)"
      :class="[{ current: $store.state.curIdx === 3 }]"
    >
      选项3</a
    >
    <a
      href="javascript:;"
      @click="updateCurIdx(4)"
      :class="[{ current: $store.state.curIdx === 4 }]"
    >
      选项4</a
    >
  </div>
</template>


<script>
import { mapMutations } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "Tab",
  //调用actions进行curIndex的初始化
  created() {
    this.$store.dispatch("init");
    this.$store.dispatch("hello").then((data) => {
      console.log(data)
      if (data === `success`) {
        var suc = true;
        console.log(suc);
      }
    });
  },
  //接收父组件传递进来的curIdx的值
  // props: {
  //   curIdx: Number,
  // },
  //点击触发父组件更新curIdx值
  methods: {
    // 使用映射的方法获取setCurIdx方法
    ...mapMutations(["setCurIdx"]),
    // 映射引入actions
    ...mapActions(["updateCurIdx"]),
    // changeTab(i) {
    //   this.$emit("changeTab", i);
    // },

    //  当然也可以不映射，而是直接调用this.$store.mutations.setCurIdx()修改
    // setCurIdx(idx) {
    //   this.$store.commit("setCurIdx", idx);
    // },

    //我们甚至可以进一步封装将setCurIdx改个名字
    // ...mapMutations(['setCurIdx']),
    // changeTab(idx){
    //   this.setCurIdx(idx);
    // }

    // updateCurIdx(idx) {
    //   this.$store.dispatch("updateCurIdx", idx);
    // },
  },
};
</script>


<style scoped>
a {
  margin-right: 10px;
}
.current {
  color: #000;
  text-decoration: none;
}
</style>