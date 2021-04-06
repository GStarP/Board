import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    board: {
      desktop: {
        width: 1920,
        height: 1080
      },
      items: [
        {
          idx: 0,
          type: "dice",
          max: 6,
          value: 3
        }
      ]
    }
  },
  mutations: {
    addItem: (state, item) => {
      const idx = state.board.items.length;
      item.idx = idx;
      state.board.items.push(item);
    },
    updateItem(state, payload) {
      state.board.items[payload.idx][payload.attr] = payload.val;
    },
    deleteItem(state, item) {
      const idx = item.idx;
      for (let i = idx + 1; i < state.board.state.items.length; i++) {
        state.board.items[i].idx--;
      }
      state.board.items.splice(idx, 1);
    }
  }
});
