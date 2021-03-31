<template>
  <div class="container">
    <div class="header" style="height: 80px"></div>
    <div class="main">
      <div class="aside aside-left" style="width: 200px"></div>
      <div class="main">
        <desktop>
          <dice />
        </desktop>
      </div>
      <div class="aside aside-right" style="width: 200px"></div>
    </div>
  </div>
</template>

<script>
import Desktop from "@/components/Desktop.vue";
import Dice from "@/components/items/Dice.vue";

export default {
  components: {
    Desktop,
    Dice
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
}
.header {
  border-bottom: 1px solid #dadce0;
}
.main {
  flex: 1;
  display: flex;
}
.aside {
  height: 100%;
  &-left {
    border-right: 1px solid #dadce0;
  }
  &-right {
    border-left: 1px solid #dadce0;
  }
}
</style>
