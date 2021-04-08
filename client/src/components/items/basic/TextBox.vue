<template>
  <div v-drag v-resize class="text-box" :style="sizeStyle">
    <div contenteditable class="text-box__content" @mousedown.stop>
      {{ d.value }}
    </div>
  </div>
</template>

<script>
export default {
  name: "text-box",
  props: ["d"],
  computed: {
    sizeStyle() {
      return {
        width: `${this.d.width}px`,
        height: `${this.d.height}px`
      };
    }
  }
};
</script>

<style lang="scss">
.text-box {
  padding: 4px;

  border: 2px solid #000;
  background: #fff;

  display: flex;
  justify-content: center;
  align-items: center;

  &:hover {
    cursor: move;
  }

  &__content {
    // 防止文字全删除后无法选中输入
    min-width: 1rem;

    text-align: center;

    &:hover {
      cursor: text;
    }
    &:focus {
      outline: none;
    }
  }
}
</style>
