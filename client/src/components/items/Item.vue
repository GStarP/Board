<template>
  <component :is="d.type" :idx="d.idx" v-bind="$props" />
</template>

<script>
export default {
  props: {
    d: Object
  }
};
</script>

<style></style>
