import Vue from "vue";
import App from "./App.vue";
// 引入vuex
import Vuex from "vuex";
// 引入ElementUI
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
// 全局注册ElementUI
Vue.use(ElementUI);
// 注册vuex
Vue.use(Vuex);
// vuex数据不是持久化存储的，每次应用刷新数据都会重置 vuex-persistedstate解决长久存储默认在localStorage
import createPersistedState from "vuex-persistedstate";
// 实例化 vuex 对象 Store 配置项 state 存放数据
const store = new Vuex.Store({
  state: {
    // 管理数据
    count: 0,
    msg: "11",
  },
  // 定义mutations
  mutations: {
    addCount1(state) {
      // 方法里参数 第一个参数是当前store的state属性
      state.count += 1;
    },
    addCount2(state, payload) {
      // 方法里参数 第一个参数是当前store的state属性
      state.count += payload;
    }, // 这是 一个 mutation
    // 每个 mutation 由一个字符串的 事件类型 (type) 和 一个 回调函数 (handler)。
    // 就比如说 这个例子里的 事件类型type 就是 addCount这个字符串  回调函数 就是对应的这个函数
  },
  // 处理异步任务
  actions: {
    countAsyns({ commit }, data) {
      setTimeout(() => {
        commit("addCount1"), commit("addCount2", data);
      }, 1000);
    },
  },
  // getters 类似计算属性
  getters: {
    count: (state, getter) => {
      // Getter 也可以接受其他 getter 作为第二个参数
      console.log(getter, 1);
      return state.count;
    },
    msg: (state) => {
      return state.msg;
    },
  },
  // 模块化
  modules: {
    user: {
      namespaced: true,
      state: {
        user: "11111222",
        name: 12121,
      },
      mutations: {},
      getters: {
        user: (state) => state.user,
      },
    },
  },
  // 插件
  plugins: [
    createPersistedState({
      key: "myVuex", // 指定名称 默认vuex
      paths: ["user"], // 只可以指定缓存的模块
      // reducer(state) {
      //   // 具体到某一字段
      //   console.log(state);
      //   return {
      //     user: {
      //       token: state.user.name,
      //     },
      //   };
      // },
    }),
  ],
});
// 根实例配置 store 选项指向 store 实例对象
Vue.config.productionTip = false;

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
