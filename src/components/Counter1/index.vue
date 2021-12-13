<template>
  <div>
    <h2>Counter1</h2>
    <div>Counter1:{{ count }}</div>
    <button @click="setCount(1)">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Counter1",
  computed: {
    //   注意，此时要额外再传一个参数即命名空间这里是counter1
    // 后面的写法是一样的，数组或者对象形式都可以
    ...mapState("counter1", ["count"]),
  },
  methods: {
    ...mapMutations("counter1", ["setCount"]),
  },
};
</script>


<style scoped>
</style>