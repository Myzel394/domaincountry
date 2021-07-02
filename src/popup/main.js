import { createApp } from "vue";
import VueClassNames from "vue-classnames";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGlobe, faExchangeAlt, faWifi, faBroadcastTower, faClock, faSadTear } from "@fortawesome/free-solid-svg-icons"
import store from "@/store";
import App from "./App.vue";

library.add(faGlobe);
library.add(faWifi);
library.add(faExchangeAlt);
library.add(faBroadcastTower);
library.add(faClock);
library.add(faSadTear);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueClassNames)
    .use(store)
    .mount("#app")
