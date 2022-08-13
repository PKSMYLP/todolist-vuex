export default {
  namespaced: true,
  state: {
    // todo列表
    todoItem: [],
  },
  mutations: {
    //添加数据
    addItem(state, item) {
      state.todoItem.push(item);
    },
    // 删除数据
    delItem(state, item) {
      state.todoItem.splice(item, 1);
    },
    // 全部
    allItem(state) {
      state.todoItem;
    },
    // 未完成
    unItem(state, val) {
      state.todoItem.filter((ele) => ele.isDone == val);
    },
    // 已完成
    doneItem(state, val) {
      state.todoItem.filter((ele) => ele.isDone == val);
    },
  },
  actions: {},
};
