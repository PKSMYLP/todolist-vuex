<template>
  <footer class="footer">
    <span class="todo-count"
      >剩余<strong>{{ count }}</strong></span
    >
    <ul class="filters">
      <li>
        <a
          :class="{ selected: isAll == 0 }"
          href="javascript:;"
          @click="change(0)"
          >全部</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isAll == 1 }"
          @click="change(1)"
          href="javascript:;"
          >未完成</a
        >
      </li>
      <li>
        <a
          :class="{ selected: isAll == 2 }"
          @click="change(2)"
          href="javascript:;"
          >已完成</a
        >
      </li>
    </ul>
    <button class="clear-completed" @click="clear">清除已完成</button>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      isAll: 0, // 0 全部完成 1 未完成 2 已完成
    };
  },
  computed: {
    count() {
      return this.$store.state.header.todoItem.filter((ele) => ele.isDone == 0)
        .length;
    },
  },
  methods: {
    clear() {
      this.$store.state.header.todoItem.forEach((ele) => (ele.isDone = 0));
    },
    change(val) {
      if (val == 0) {
        this.$store.commit("header/change", val);
      } else if (val == 1) {
        this.$store.commit("header/change", val);
      } else {
        this.$store.commit("header/change", val);
      }
    },
  },
};
</script>
