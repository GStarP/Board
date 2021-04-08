<template>
  <div class="side-bar__item">
    <el-collapse v-model="activeMenu">
      <el-collapse-item title="基本图形" name="shape">
        <div class="flex r-center c-center" style="width: 100%; height: 64px;">
          暂无
        </div>
      </el-collapse-item>
      <el-collapse-item title="桌游元素" name="board">
        <div class="menu-item" @click="addDice">
          <img class="menu-item__icon" src="../assets/imgs/icon-dice.png" />
          <span class="menu-item__text">骰子</span>
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ["board"]
    };
  },
  methods: {
    addDice() {
      const newDice = {
        idx: -1,
        x: 0,
        y: 0,
        type: "dice",
        max: 6,
        value: 1
      };
      this.$store.commit("addItem", newDice);
    }
  }
};
</script>

<style lang="scss">
.side-bar {
  &__item {
    display: flex;
    flex-direction: column;

    .menu-item {
      $width: 72px;
      $height: 72px;
      $margin: (180px - 2 * $width) / 3;
      $itemtextHeight: 16px;
      $itemInsideMargin: 4px;

      width: $width;
      height: $height;
      margin: 8px $margin;
      :nth-child(even) {
        margin-left: 0;
      }

      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      &:hover {
        cursor: pointer;
        background: #eee;
      }

      &__icon {
        height: $height - $itemtextHeight - 2 * $itemInsideMargin;
        margin: $itemInsideMargin 0;
      }

      &__text {
        font-size: 14px;
        height: $itemtextHeight;
        line-height: $itemtextHeight;
      }
    }

    .el-collapse {
      border-top: none;
    }
    .el-collapse-item__header {
      padding-left: 1rem;
      font-size: 15px;
    }
    .el-collapse-item__wrap {
      border-top: 1px solid #ebeef5;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
      min-height: 64px;
    }
  }
}
</style>
