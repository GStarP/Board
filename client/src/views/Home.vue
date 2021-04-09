<template>
  <div class="container">
    <div class="header" style="height: 80px"></div>
    <div class="main">
      <div class="aside aside-left" style="width: 180px">
        <side-bar-item />
      </div>
      <div class="main">
        <desktop>
          <item
            v-for="item of board.items"
            :key="'item' + item.idx"
            :type="item.type"
            :d="item"
          />
        </desktop>
      </div>
      <div class="aside aside-right" style="width: 180px">
        <side-bar-config />
      </div>
    </div>
    <div class="footer" style="height: 24px"></div>
  </div>
</template>

<script>
import Desktop from "@/components/Desktop.vue";
import SideBarItem from "@/components/SideBarItem.vue";
import SideBarConfig from "@/components/SideBarConfig.vue";

export default {
  components: {
    Desktop,
    SideBarItem,
    SideBarConfig
  },
  computed: {
    board() {
      return this.$store.state.board;
    }
  }
};
</script>

<style lang="scss">
.container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

  z-index: 101;
}
.header {
  border-bottom: 1px solid #dadce0;
  background: #fff;

  z-index: 101;
}
.footer {
  border-top: 1px solid #dadce0;
  background: #fff;

  z-index: 101;
}
.main {
  flex: 1;
  overflow: hidden; // 否则会被子元素撑开
  display: flex;

  z-index: 1;
}
.aside {
  height: 100%;
  background: #fff;
  z-index: 101;

  overflow: auto;
  overflow-x: hidden;

  &-left {
    border-right: 1px solid #dadce0;
  }
  &-right {
    border-left: 1px solid #dadce0;
  }
}
</style>
