<template>
  <div id="desktop">
    <div class="desktop__main" :style="style">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
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
