<template>
  <div class="home">
    <div v-if="user">My name: {{ user.username }}</div>
    <room v-for="(r, i) of rooms" :key="'room' + i" :room="r" />
  </div>
</template>

<script>
import { login } from "@/api/user";
import { buildWSConnection } from "@/api/websocket";
import { allRoom } from "@/api/room";
import Room from "@/components/Room.vue";

export default {
  components: { Room },
  data() {
    return {
      rooms: []
    };
  },
  methods: {
    login() {
      login("123", "123").then(res => {
        this.$store.commit("setUser", res.data);
        let io = buildWSConnection(this.$store.state.user.userId);
        io.onmessage = e => {
          console.log(e.data);
          this.rooms = JSON.parse(e.data);
        };
        this.$store.commit("setIO", io);
      });
    },
    getAllRoom() {
      allRoom().then(res => {
        this.rooms = res.data;
      });
    }
  },
  computed: {
    user() {
      return this.$store.state.user;
    }
  },
  mounted() {
    this.login();
    this.getAllRoom();
  }
};
</script>
