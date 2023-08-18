import Vue from "vue";
import App from "./App.vue";
import "./registerServiceWorker";
import store from "./store";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faGamepad,
  faRobot,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faPlay,
  faRedo,
  faHome,
  faChessPawn,
  faChessQueen,
  faChessKing,
  faClipboard,
  faClipboardCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Vue2TouchEvents from "vue2-touch-events";

library.add(
  faGamepad,
  faRobot,
  faChevronLeft,
  faChevronRight,
  faChevronUp,
  faChevronDown,
  faPlay,
  faRedo,
  faHome,
  faChessPawn,
  faChessQueen,
  faChessKing,
  faClipboard,
  faClipboardCheck
);
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

Vue.use(Vue2TouchEvents);

new Vue({
  store,
  render: (h) => h(App),
}).$mount("#app");
