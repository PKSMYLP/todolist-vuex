<template>
  <ul class="todo-list">
    <!-- completed: 完成的类名 -->
    <li
      :class="{ completed: item.isDone }"
      v-for="(item, index) in todoItem"
      :key="index"
    >
      <div class="view">
        <input class="toggle" type="checkbox" v-model="item.isDone" />
        <label>{{ item.text }}</label>
        <button class="destroy" @click="del(index)"></button>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  computed: {
    ...mapGetters(["todoItem"]),
  },
  methods: {
    del(index) {
      this.$store.commit("header/delItem", index);
    },
  },
};
</script>
