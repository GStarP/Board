import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element";
import "./components/items/index";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");

/* v-drag: 元素可拖拽 */
Vue.directive("drag", {
  bind: el => {
    // 鼠标按住时开始移动
    el.onmousedown = e => {
      // 鼠标在元素内部的左/上边距
      let inL = e.clientX - el.offsetLeft;
      let inT = e.clientY - el.offsetTop;
      // 元素相对于 #desktop 的左/上边距
      let l = el.style.left;
      let t = el.style.top;

      const desktop = document.getElementById("desktop");

      // 鼠标移动时元素跟随移动
      document.onmousemove = e => {
        l = e.clientX - desktop.offsetLeft - inL;
        t = e.clientY - desktop.offsetTop - inT;
        // 当移动超过桌面范围时忽略
        if (l < 0 || t < 0) {
          return;
        }

        el.style.left = `${l}px`;
        el.style.top = `${t}px`;
      };

      // 鼠标松开时结束移动
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        // 更新 vuex 中的元素状态
        store.commit("updateItem", {
          idx: Number.parseInt(el.getAttribute("idx")),
          left: l,
          top: t
        });
      };
    };

    return false;
  }
});
