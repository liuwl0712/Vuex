<template>
  <div>
    <!-- <h3>当前最新的count值为：{{count}}</h3> -->
    <h3>{{showNum}}</h3>
    <button @click="subHandler1">-1</button>
    <button @click="subN(5)">-N</button>
    <button @click="subHandler2">-1 Async</button>
    <button @click="subNAsync(5)">-N Async</button>
  </div>
</template>
<script>
import { mapState, mapMutations, mapActions, mapGetters } from "vuex";
export default {
  name: "Subtraction",
  data() {
    return {};
  },
  computed: {
    ...mapState(["count"]),
    ...mapGetters(["showNum"]),
  },
  methods: {
    ...mapMutations(["sub", "subN"]),
    ...mapActions(["subAsync", "subNAsync"]),
    subHandler1() {
      this.sub();
    },
    subHandler2() {
      this.subAsync();
    },
  },
};
</script>