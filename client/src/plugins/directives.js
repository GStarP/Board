import Vue from "vue";

Vue.directive("drag", {
  bind: el => {
    el.style.position = "absolute";
    // 鼠标按住时开始移动
    el.onmousedown = e => {
      // 鼠标在元素内部的左/上边距
      let inL = e.clientX - el.offsetLeft;
      let inT = e.clientY - el.offsetTop;

      // 鼠标移动时元素跟随移动
      document.onmousemove = e => {
        let l = e.clientX - inL;
        let t = e.clientY - inT;
        el.style.left = `${l}px`;
        el.style.top = `${t}px`;
      };

      // 鼠标松开时结束移动
      document.onmouseup = () => {
        document.onmousemove = null;
        document.onmouseup = null;
      };
    };

    return false;
  }
});
