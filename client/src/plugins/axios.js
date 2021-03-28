import axios from "axios";

axios.defaults.baseURL =
  process.env.NODE_ENV === "production" ? "/api" : "/api";

const globalConfig = {
  timeout: 10 * 1000
};

const globalAxios = axios.create(globalConfig);

export default globalAxios;
