import { createApp } from "vue";
import VueClassNames from "vue-classnames";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faGlobe, faExchangeAlt, faWifi, faBroadcastTower, faClock } from "@fortawesome/free-solid-svg-icons"
import CurrentTabPlugin from "@/plugins/CurrentTabPlugin";
import store from "@/store";
import App from "./App.vue";

library.add(faGlobe);
library.add(faWifi);
library.add(faExchangeAlt);
library.add(faBroadcastTower);
library.add(faClock);

createApp(App)
    .component("font-awesome-icon", FontAwesomeIcon)
    .use(VueClassNames)
    .use(store)
    .use(CurrentTabPlugin)
    .mount("#app")
