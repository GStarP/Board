<template>
  <div id="desktop">
    <slot />
  </div>
</template>

<script>
export default {
  //
};
</script>

<style lang="scss">
#desktop {
  width: 100%;
  height: 100%;

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
