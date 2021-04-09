<template>
  <div class="side-bar__item">
    <el-collapse v-model="activeMenu">
      <el-collapse-item title="基础元素" name="basic">
        <div class="menu-item" @click="addTextBox">
          <span class="menu-item__text">文本框</span>
          <i class="el-icon-plus" />
        </div>
      </el-collapse-item>
      <el-collapse-item title="桌游元素" name="board">
        <div class="menu-item" @click="addDice">
          <span class="menu-item__text">骰子</span>
          <i class="el-icon-plus" />
        </div>
        <div class="menu-item">
          <span class="menu-item__text">计数器</span>
          <i class="el-icon-plus" />
        </div>
      </el-collapse-item>
    </el-collapse>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeMenu: ["basic", "board"]
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
    },
    addTextBox() {
      const newTextBox = {
        idx: -1,
        x: 0,
        y: 0,
        width: 100,
        height: 62,
        type: "text-box",
        value: "请输入"
      };
      this.$store.commit("addItem", newTextBox);
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
      $h: 36px;
      height: $h;

      display: flex;
      align-items: center;

      padding: 0 1rem;

      border-bottom: 1px solid #ebeef5;

      &:hover {
        cursor: pointer;
        background: #eee;
      }

      &__text {
        font-size: 14px;
      }

      i {
        margin-left: auto;
      }
    }

    .el-collapse {
      border-top: none;
    }
    .el-collapse-item__header {
      padding-left: 1rem;
      font-size: 15px;
      font-weight: 600;
    }
    .el-collapse-item__wrap {
      border-top: 1px solid #ebeef5;
      border-bottom: none;
    }
    .el-collapse-item__content {
      padding-bottom: 0;
    }
  }
}
</style>
