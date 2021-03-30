<template>
  <div class="home">
    <desktop>
      <dice />
      <dice :max="12" />
    </desktop>
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
