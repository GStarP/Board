<template>
  <div class="room">
    <div v-for="i of room.size" :key="room.id + 'room' + i">
      {{ roomSeat(i - 1) }}
    </div>
    <button @click="enterRoom()">enter</button>
  </div>
</template>

<script>
export default {
  props: ["room"],
  methods: {
    roomSeat(i) {
      return i < this.room.users.length ? this.room.users[i].username : "空";
    },
    enterRoom() {
      if (
        this.room.users.length < this.room.size &&
        this.room.users
          .map(u => u.userId)
          .indexOf(this.$store.state.user.userId) === -1
      ) {
        this.$store.state.io.send(
          JSON.stringify({
            userId: this.$store.state.user.userId,
            roomId: this.room.roomId
          })
        );
      }
    }
  }
};
</script>

<style>
.room {
  display: flex;
  flex-direction: row;
}
</style>
