<template>
  <div id="app">
    <catagtory />
    <new-list />
  </div>
</template>

<script>
import Catagtory from "./components/category.vue";
import NewList from "./components/new-list.vue";
export default {
  name: "App",
  components: {
    Catagtory,
    NewList,
  },
  data() {
    return {};
  },
  computed: {},
  watch: {},
  methods: {},
  created() {},
  mounted() {},
};
</script>
<style scoped></style>
