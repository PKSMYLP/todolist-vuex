<template>
  <div>
    <ul class="catagtory">
      <li
        :class="`${currentCatagtory == item.id ? 'select' : ''}   `"
        v-for="item in catagtory"
        :key="item.id"
        @click="$store.commit('category/updataCurrentCatagtory', item.id)"
      >
        {{ item.name }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  components: {},
  data() {
    return {};
  },
  computed: {
    ...mapGetters(["catagtory", "currentCatagtory"]),
  },
  // 监视currentCatagtory的ID 并触发newlist的
  watch: {
    // newValue 是 currentCatagtory当前的值
    currentCatagtory(newValue) {
      console.log(newValue);
      this.$store.dispatch("newlist/getCurrentList", newValue);
    },
  },
  methods: {},
  created() {},
  mounted() {
    // 触发接口
    this.$store.dispatch("category/getupdataCatagtory");
  },
};
</script>
<style scoped></style>
