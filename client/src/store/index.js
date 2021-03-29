import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    user: undefined,
    io: undefined
  },
  mutations: {
    setUser: (state, payload) => {
      state.user = payload;
    },
    setIO: (state, payload) => {
      state.io = payload;
    }
  },
  actions: {},
  modules: {}
});
