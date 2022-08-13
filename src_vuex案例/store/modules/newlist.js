import axios from "axios";
export default {
  namespaced: true,
  state: {
    currentList: [],
  },
  mutations: {
    updatacurrentList(state, payload) {
      state.currentList = payload;
    },
  },
  actions: {
    async getCurrentList(context, cataId) {
      const {
        data: {
          data: { results },
        },
      } = await axios.get(`http://toutiao.itheima.net/v1_0/articles?channel_id=${cataId}&timestamp=${+new Date()}
      &with_top=1`);
      console.log(results);
      context.commit("updatacurrentList", results);
    },
  },
};
