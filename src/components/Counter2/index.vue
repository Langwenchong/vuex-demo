<template>
  <div>
    <h2>Counter2</h2>
    <div>counter1:{{ count }}</div>
    <button @click="setCount(2)">add</button>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Counter2",
  computed: {
    //   注意，此时要额外再传一个参数即命名空间这里是counter1
    // 后面的写法是一样的，数组或者对象形式都可以
    ...mapState("counter2", ["count"]),
  },
  methods: {
    ...mapMutations("counter2", ["setCount"]),
  },
};
</script>


<style scoped>
</style>