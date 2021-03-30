<template>
  <div class="desktop">
    <slot />
  </div>
</template>

<script>
export default {
  //
};
</script>

<style>
.desktop {
  width: 100vw;
  height: 100vh;

  box-sizing: border-box;
  padding: 64px;
}
</style>
