<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: "app"
};
</script>

<style lang="scss">
html,
body,
#app {
  margin: 0;
  width: 100%;
  height: 100%;
}

#app {
  font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB",
    "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
}

// 美化滚动条
::-webkit-scrollbar {
  background-color: #eee;
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-thumb {
  background-color: #aaa;
}
</style>
