import { createApp } from "vue";
import VueClassNames from "vue-classnames";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faGlobe, faExchangeAlt, faWifi, faBroadcastTower, faClock, faSadTear, faPlus, faMinus, faSquare, faHome, faMask,
} from "@fortawesome/free-solid-svg-icons"
import store from "./store";
import App from "./App.vue";

library.add(faGlobe);
library.add(faWifi);
library.add(faExchangeAlt);
library.add(faBroadcastTower);
library.add(faClock);
library.add(faSadTear);
library.add(faPlus);
library.add(faMinus);
library.add(faSquare);
library.add(faHome);
library.add(faMask);

createApp(App)
    .use(VueClassNames)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
