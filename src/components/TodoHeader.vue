<template>
  <header class="header">
    <h1>todos</h1>
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="all" />
    <label for="toggle-all"></label>
    <input
      class="new-todo"
      placeholder="输入任务名称-回车确认"
      autofocus
      v-model.trim="text"
      @keyup.enter="btn"
    />
  </header>
</template>

<script>
export default {
  data() {
    return {
      text: "",
      isDone: 0,
    };
  },
  methods: {
    btn() {
      if (this.text.trim() == "") return alert("请输入内容");
      this.$store.commit("header/addItem", {
        text: this.text,
        isDone: this.isDone,
      });
      this.text = "";
    },
  },
  computed: {
    all: {
      set(val) {
        this.$store.state.header.todoItem.forEach((ele) => (ele.isDone = val));
      },
      get() {
        return this.$store.state.header.todoItem.every((ele) => ele.isDone);
      },
    },
  },
};
</script>
