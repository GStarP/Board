<template>
  <div class="side-bar__config">
    <div class="title">{{ title }}</div>
    <div class="config__wrapper">
      <component :is="'config-' + type" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      typeNameMap: {
        desktop: "桌面",
        "text-box": "文本框",
        dice: "骰子"
      }
    };
  },
  computed: {
    type() {
      const idx = this.$store.state.curItemIdx;
      return idx === -1 ? "desktop" : this.$store.state.board.items[idx].type;
    },
    title() {
      return this.typeNameMap[this.type];
    }
  }
};
</script>

<style lang="scss">
.side-bar {
  &__config {
    display: flex;
    flex-direction: column;
    height: 100%;

    .title {
      $h: 36px;
      height: $h;
      line-height: $h;
      text-align: center;

      border-bottom: 1px solid #dadce0;
    }

    .config {
      display: flex;
      flex-direction: column;

      padding: 16px 16px;

      &-input {
        width: 100%;

        display: flex;
        flex-direction: row;

        &:not(:last-child) {
          margin-bottom: 12px;
        }

        .el-input {
          &__inner {
            padding: 0 12px;
          }
          &-group__prepend {
            padding: 0 10px;
          }
        }
      }

      &__wrapper {
        width: 100%;
        flex: 1;
        overflow: auto;
      }
    }
  }
}
</style>
