<template>
  <component :is="d.type" v-bind="$props" />
</template>

<script>
export default {
  props: {
    d: Object
  }
};
</script>

<style></style>
