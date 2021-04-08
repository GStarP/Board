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
          x: 0,
          y: 0,
          // 特有属性
          type: "dice",
          max: 6,
          value: 3
        },
        {
          idx: 1,
          x: 50,
          y: 0,
          width: 100,
          height: 62,
          type: "text-box",
          value: "hxwnb"
        }
      ]
    },
    curItemIdx: -1
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
    },
    selectItem(state, idx) {
      state.curItemIdx = idx;
      console.log("current item: " + state.curItemIdx);
    }
  }
});
