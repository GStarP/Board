<template>
  <div v-drag class="dice" :style="style">
    <div class="dice__txt">{{ value }}</div>
    <!-- 阻止 mousedown 冒泡以防触发父元素 v-drag 的响应事件 -->
    <div class="dice__btn" @mousedown.stop @click="randomValue">ROLL</div>
  </div>
</template>

<script>
import Vue from "vue";
export default Vue.extend({
  name: "dice",
  props: ["d"],
  data() {
    return {
      value: this.d.value
    };
  },
  methods: {
    packup() {
      return {
        type: "dice"
      };
    },
    randomValue() {
      // 投出点数
      const result = Math.ceil(Math.random() * this.d.max);
      this.$store.commit("updateItem", {
        idx: this.d.idx,
        value: result
      });
      // 动画效果
      setTimeout(() => {
        this.value = "#";
      }, 0);
      setTimeout(() => {
        this.value = "?";
      }, 100);
      setTimeout(() => {
        this.value = result;
      }, 200);
    }
  },
  computed: {
    style() {
      return {
        left: `${this.d.x}px`,
        top: `${this.d.y}px`
      };
    }
  }
});
</script>

<style lang="scss">
.dice {
  $size: 48px;
  width: $size;

  display: flex;
  flex-direction: column;

  position: relative;

  background: #fff;

  &__txt {
    width: $size;
    height: $size;
    border: #000 solid 2px;

    display: flex;
    justify-content: center;
    align-items: center;

    font-size: 1.5rem;
    font-weight: 600;
    user-select: none;

    &:hover {
      cursor: move;
    }
  }

  &__btn {
    width: $size;
    border: #000 solid 2px;
    border-top: none;

    font-size: 14px;
    font-weight: bold;
    user-select: none;
    text-align: center;

    &:hover {
      cursor: pointer;
      background: #000;
      color: #fff;
    }
  }
}
</style>
