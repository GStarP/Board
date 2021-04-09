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
    updateDesktop(state, newConfig) {
      state.board.desktop = {
        ...state.board.desktop,
        ...newConfig
      };
      console.log(state.board.desktop);
    },
    addItem: (state, item) => {
      const copy = state.board.items.slice();
      const idx = copy.length;
      item.idx = idx;
      copy.push(item);
      state.board.items = copy;
    },
    updateItem(state, newConfig) {
      const copy = state.board.items.slice();
      copy[newConfig.idx] = {
        ...state.board.items[newConfig.idx],
        ...newConfig
      };
      state.board.items = copy;
      console.log(state.board.items);
    },
    deleteItem(state, item) {
      const copy = state.board.items.slice();
      const idx = item.idx;
      for (let i = idx + 1; i < copy.length; i++) {
        copy[i].idx--;
      }
      copy.splice(idx, 1);
      state.board.items = copy;
    },
    selectItem(state, idx) {
      state.curItemIdx = idx;
      console.log("current item: " + state.curItemIdx);
    }
  }
});
