import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./plugins/element";
import "./components/items/index";
import "./components/configs/index";
import { removepx } from "@/utils/format";

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
      let inL = e.clientX - 180 - el.offsetLeft;
      let inT = e.clientY - 80 - el.offsetTop;
      // 为需要缩放的元素留出右下角 16*16 的空间
      if (el.style.resize === "both") {
        const lBorder = removepx(el.style.width) - 16;
        const tBorder = removepx(el.style.height) - 16;
        console.log(inL, lBorder);
        console.log(inT, tBorder);
        if (inL > lBorder && inT > tBorder) {
          return;
        }
      }
      // 元素相对于 #desktop 的左/上边距
      let l = removepx(el.style.left);
      let t = removepx(el.style.top);

      // 鼠标移动时元素跟随移动
      document.onmousemove = e => {
        l = e.clientX - 180 - inL;
        t = e.clientY - 80 - inT;
        // 鼠标移动超过桌面范围时忽略
        if (l < 0 || t < 0) {
          return false;
        }
        // 移动元素
        el.style.left = `${l}px`;
        el.style.top = `${t}px`;
      };

      // 鼠标松开时结束移动
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
        // 更新 vuex 中的元素位置状态
        l = l < 0 ? 0 : l;
        t = t < 0 ? 0 : t;
        store.commit("updateItem", {
          idx: Number.parseInt(el.getAttribute("idx")),
          x: l,
          y: t
        });
      };
    };
  }
});

/* v-resize: 元素可缩放 */
Vue.directive("resize", {
  bind: el => {
    el.style.overflow = "auto";
    el.style.resize = "both";
    console.log(el);
    // onresize 只对窗口有效, 元素需要使用 ResizeObserver
    const resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        const target = entry.target;
        store.commit("updateItem", {
          idx: Number.parseInt(target.getAttribute("idx")),
          width: removepx(target.style.width),
          height: removepx(target.style.height)
        });
      }
    });
    resizeObserver.observe(el);
  }
});
