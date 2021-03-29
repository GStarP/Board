<template>
  <div class="home">
    <el-button @click="onClick">HXWNB</el-button>
  </div>
</template>

<script>
import { login } from "@/api/user.js";
export default {
  methods: {
    onClick() {
      login("admin", "123456")
        .then(res => {
          console.log(res);
          if (res.code === 200) {
            this.$message.success(res.msg);
          } else {
            this.$message.error(res.msg);
          }
        })
        .catch(e => {
          console.log(e);
          this.$message.error("网络错误");
        });
    }
  }
};
</script>
