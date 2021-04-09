<template>
  <div class="config-input">
    <el-input size="small" v-model="value" @change="onChange($event)">
      <template slot="prepend">{{ name }}</template>
    </el-input>
  </div>
</template>

<script>
export default {
  props: ["attr", "name", "type"],
  mounted() {
    // TODO 不让在 data 里用 computed 爷吐了
    this.value = this.d[this.attr];
  },
  data() {
    return {
      value: ""
    };
  },
  methods: {
    onChange(v) {
      if (this.type === "number") {
        // 若输入值不是数字则不响应
        if (!/^\d+$/.test(v)) {
          return;
        }
        v = Number.parseInt(v);
      }
      if (this.idx === -1) {
        this.$store.commit("updateDesktop", {
          [this.attr]: v
        });
      } else {
        this.$store.commit("updateItem", {
          idx: this.idx,
          [this.attr]: v
        });
      }
    }
  },
  computed: {
    idx() {
      return this.$store.state.curItemIdx;
    },
    d() {
      if (this.idx === -1) {
        return this.$store.state.board.desktop;
      } else {
        return this.$store.state.board.items[this.idx];
      }
    }
  },
  watch: {
    d(newD) {
      this.value = newD[this.attr];
    }
  }
};
</script>

<style></style>
