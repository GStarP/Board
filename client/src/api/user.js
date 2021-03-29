import axios from "@/plugins/axios.js";

export async function login(username, password) {
  const { data } = await axios.post("/user/login", {
    username,
    password
  });
  return data;
}
