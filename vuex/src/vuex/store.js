import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);

//store 中存放的就是全局共享数据
const state = {
  count: 0,
};
const mutations = {
  add(state) {
    //变更状态
    state.count++;
  },
  addN(state, val) {
    state.count += val;
  },
  sub(state) {
    state.count--;
  },
  subN(state, val) {
    state.count -= val;
  },
};
const actions = {
  addAsync(mutations) {
    setTimeout(() => {
      mutations.commit("add");
    }, 1000);
  },
  addNAsync(mutations, val) {
    setTimeout(() => {
      mutations.commit("addN", val);
    }, 1000);
  },
  subAsync(mutations) {
    setTimeout(() => {
      mutations.commit("sub");
    }, 1000);
  },
  subNAsync(mutations, val) {
    setTimeout(() => {
      mutations.commit("subN", val);
    }, 1000);
  },
};
const getters = {
  showNum(state) {
    return "当前最新的数量是【" + state.count + "】";
  },
};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
