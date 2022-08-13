<template>
  <div>
    <i>{{ user }}1</i>
    <div>{{ $store.state.user.user }}</div>

    {{ $store.state.count }}
    <h2>{{ $store.getters.count }}</h2>
    <h1>{{ count }}</h1>
    <button @click="addCount1">点击加加1</button>
    <button @click="addCount2(10)">点击加加2</button>
    <button @click="countAsyns(100)">点击延迟加加3</button>
  </div>
</template>

<script>
import {
  mapState,
  mapMutations,
  mapActions,
  createNamespacedHelpers,
} from "vuex";
const { mapGetters } = createNamespacedHelpers("user");
export default {
  name: "App",
  components: {},
  data() {
    return {};
  },
  computed: {
    // 可以写在计算属性中
    // count() {
    //   return this.$store.state.count;
    // },
    // 使用 辅助函数 - mapState
    ...mapState(["count"]),
    // 其他的属性照常加
    ...mapGetters(["user"]),
    // ...mapGetters("user", ["user"]),
  },
  watch: {},
  methods: {
    // addCount() {
    //   // 调用store中的mutations 提交给muations
    //   // commit('muations名称', 2)
    //   this.$store.commit("addCount", 10); // 直接调用mutations
    // },
    ...mapMutations(["addCount1", "addCount2"]),

    ...mapActions(["countAsyns"]),
  },
  created() {
    console.log(this.$store);
  },
  mounted() {},
};
</script>
<style scoped></style>
