export default {
  namespaced: true,
  state: {
    // todo列表
    todoItem: [],
    isAll: 0, // 0 全部完成 1 未完成 2 已完成
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
    // 切换
    change(state, num) {
      state.isAll = num;
    },
  },
};
