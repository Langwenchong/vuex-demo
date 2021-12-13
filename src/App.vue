<template>
  <div id="app">
    <!-- 传递给子组件Tab的值以及为他绑定一个方法用来通知父组件更新值 -->
    <!-- <Tab :curIdx="curIdx" @changeTab="changeTab" /> -->
    <!-- 不在需要传递curIdx了 -->
    <!-- <Tab @changeTab="changeTab" /> -->
    <!-- 也无需在为子组件提供方法了 -->
    <Tab />
    <!-- Page组件也接受这个curIdx值 -->
    <!-- <Page :curIdx="curIdx"></Page> -->
    <!-- 不在需要传递curIdx了 -->
    <Page></Page>
    <!-- <img src="./assets/logo.png"> -->
    <!-- <router-view/> -->
    <Counter1></Counter1>
    <Counter2></Counter2>
  </div>
</template>

<script>
import Tab from "@/components/Tab";
import Page from "@/components/Page";
// 引入两个加法器
import Counter1 from "@/components/Counter1";
import Counter2 from "@/components/Counter2";
export default {
  name: "App",
  components: {
    Tab,
    Page,
    Counter1,
    Counter2,
  },
  // 无需在定义curIdx了
  // data() {
  //   return {
  //     curIdx: 0,
  //   };
  // },
  // 无需在定义这个方法了
  // methods: {
  //   changeTab(i) {
  //     this.curIdx = i;
  //   },
  // },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  margin-top: 60px;
}
</style>
