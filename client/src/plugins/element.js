import Vue from "vue";
import {
  Container,
  Header,
  Main,
  Aside,
  Collapse,
  CollapseItem,
  Input,
  Button
} from "element-ui";
import { Message } from "element-ui";

Vue.prototype.$message = Message;

Vue.use(Container);
Vue.use(Header);
Vue.use(Main);
Vue.use(Aside);
Vue.use(Collapse);
Vue.use(CollapseItem);
Vue.use(Input);
Vue.use(Button);
