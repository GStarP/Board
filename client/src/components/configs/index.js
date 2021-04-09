import Vue from "vue";

import ConfigInput from "./base/ConfigInput.vue";

import ConfigDesktop from "./ConfigDesktop.vue";
import ConfigDice from "./ConfigDice.vue";
import ConfigTextBox from "./ConfigTextBox.vue";

Vue.component("config-input", ConfigInput);

Vue.component("config-desktop", ConfigDesktop);
Vue.component("config-dice", ConfigDice);
Vue.component("config-text-box", ConfigTextBox);
