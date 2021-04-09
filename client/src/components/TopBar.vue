<template>
  <div class="top-bar">
    <i class="icon el-icon-stopwatch" />
    <div class="middle-container">
      <div class="title">王权骰铸 天字 一号房</div>
      <div class="tools">
        <div class="tool-btn" @click="exportBoard">导出</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    exportBoard() {
      console.log(this.$store.state.board);
    }
  }
};
</script>

<style lang="scss">
.top-bar {
  height: 100%;

  display: flex;
  align-items: center;

  padding: 12px 20px;

  .icon {
    font-size: 44px;
    margin-right: 20px;
  }

  .middle-container {
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .title {
    font-size: 20px;
    margin-bottom: auto;
  }
  .tools {
    display: flex;
    margin-left: -8px;

    .tool-btn {
      padding: 4px 8px;

      font-size: 14px;

      &:hover {
        cursor: pointer;
        background: rgba(#000, 0.1);
      }
    }
  }
}
</style>
