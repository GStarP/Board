<template>
  <div v-drag class="dice">
    <div class="dice__txt">{{ value }}</div>
    <div class="dice__btn" @click="rd">ROLL</div>
  </div>
</template>

<script>
export default {
  props: {
    max: {
      default: 6,
      type: Number
    }
  },
  data() {
    return {
      value: 1
    };
  },
  methods: {
    rd() {
      // 投出点数
      const result = Math.ceil(Math.random() * this.max);
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
  }
};
</script>

<style lang="scss">
.dice {
  display: flex;
  flex-direction: column;

  background: #fff;

  &__txt {
    $size: 48px;
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
