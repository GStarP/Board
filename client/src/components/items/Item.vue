<template>
  <component
    class="item"
    :is="d.type"
    :idx="d.idx"
    v-bind="$props"
    :style="posStyle"
  />
</template>

<script>
export default {
  props: {
    d: Object
  },
  computed: {
    posStyle() {
      return {
        left: `${this.d.x}px`,
        top: `${this.d.y}px`
      };
    }
  },
  mounted() {
    // TODO 不知为何, 用 @click 无法注册成功
    this.$el.addEventListener("click", () => {
      this.$store.commit("selectItem", this.d.idx);
    });
  }
};
</script>

<style lang="scss">
.item {
  position: absolute;
}
</style>
