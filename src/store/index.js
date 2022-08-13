import Vue from "vue";
// 引入vuex
import Vuex from "vuex";
// 注册vuex
Vue.use(Vuex);
// 根实例配置 store 选项指向 store 实例对象
Vue.config.productionTip = false;
import createPersistedState from "vuex-persistedstate";
import header from "./modules/header";
import main from "./modules/main";
import footer from "./modules/footer";
// 实例化并暴露

const vm = new Vuex.Store({
  modules: {
    header,
    main,
    footer,
  },
  plugins: [createPersistedState()],
  getters: {
    // todoItem: (state) => state.header.todoItem,
    todoItem(state) {
      if (state.header.isAll == 0) {
        return state.header.todoItem;
      } else if (state.header.isAll == 1) {
        return state.header.todoItem.filter((ele) => !ele.isDone);
      } else {
        return state.header.todoItem.filter((ele) => ele.isDone);
      }
    },
  },
});
export default vm;
console.log(vm);
