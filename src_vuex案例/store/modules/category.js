import axios from "axios";

export default {
  namespaced: true,
  state: {
    catagtory: [], // 分类数据列表
    currentCatagtory: "", // 当前那个类目
  },
  mutations: {
    // 更新分类数据列表
    updataCatagtory(state, payload) {
      state.catagtory = payload;
    },
    // 更新当前类目
    updataCurrentCatagtory(state, id) {
      state.currentCatagtory = id;
    },
  },
  actions: {
    async getupdataCatagtory({ commit }) {
      const {
        data: {
          data: { channels },
        },
      } = await axios.get("http://toutiao.itheima.net/v1_0/channels");
      commit("updataCatagtory", channels);
      commit("updataCurrentCatagtory", channels[0].id);
    },
  },
};
