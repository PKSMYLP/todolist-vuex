import Vue from "vue";
// 引入vuex
import Vuex from "vuex";
// 注册vuex
Vue.use(Vuex);
// 根实例配置 store 选项指向 store 实例对象
Vue.config.productionTip = false;
import category from "./modules/category";
import newlist from "./modules/newlist";
// 实例化并暴露
export default new Vuex.Store({
  modules: {
    category,
    newlist,
  },
  getters: {
    catagtory: (state) => state.category.catagtory,
    currentCatagtory: (state) => state.category.currentCatagtory,
  },
});
