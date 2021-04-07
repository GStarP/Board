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
          // 公有属性
          idx: 0,
          x: 20,
          y: 20,
          // 特有属性
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
    updateItem(state, newConfig) {
      state.board.items[newConfig.idx] = {
        ...state.board.items[newConfig.idx],
        ...newConfig
      };
      console.log(state.board.items);
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
