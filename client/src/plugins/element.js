import Vue from "vue";
import { Button } from "element-ui";
import { Message } from "element-ui";

Vue.prototype.$message = Message;

Vue.use(Button);
