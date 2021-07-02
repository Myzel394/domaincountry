import { createApp } from "vue";
import VueClassNames from "vue-classnames";
import VueApexCharts from "vue3-apexcharts";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import {
    faGlobe, faExchangeAlt, faWifi, faBroadcastTower, faClock, faSadTear, faPlus, faMinus, faSquare,
} from "@fortawesome/free-solid-svg-icons"
import store from "@/store";
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

createApp(App)
    .use(VueClassNames)
    .use(VueApexCharts)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
