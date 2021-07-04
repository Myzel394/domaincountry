import { createApp } from "vue";
// @ts-ignore
import VueClassNames from "vue-classnames";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import i18nPlugin from "@/plugins/i18nPlugin";
import store from "./store";
import App from "./App.vue";
import "./fontawesome";

createApp(App)
    .use(i18nPlugin)
    .use(VueClassNames)
    .use(store)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")