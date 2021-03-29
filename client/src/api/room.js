import axios from "@/plugins/axios.js";

export async function allRoom() {
  const { data } = await axios.get("/room/all");
  return data;
}
