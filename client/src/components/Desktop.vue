<template>
  <div id="desktop">
    <div class="desktop__main" :style="style" @click="unblurItem">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    // 当点击无 Item 的 desktop 空档处时, 应当没有一个 Item 被选中
    unblurItem(e) {
      if (e.target.className === "desktop__main") {
        this.$store.commit("selectItem", -1);
      }
    }
  },
  computed: {
    config() {
      return this.$store.state.board.desktop;
    },
    style() {
      return {
        width: `${this.config.width}px`,
        height: `${this.config.height}px`
      };
    }
  }
};
</script>

<style lang="scss">
#desktop {
  width: 100%;
  height: 100%;
  overflow: auto;
}
.desktop__main {
  position: relative;
  // 格子背景
  $squareSize: 25px;
  background: -webkit-linear-gradient(
      top,
      transparent $squareSize - 1px,
      #dadce0 0
    ),
    -webkit-linear-gradient(left, transparent $squareSize - 1px, #dadce0 0);
  background-size: $squareSize $squareSize;
}
</style>
