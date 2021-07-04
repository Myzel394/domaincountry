import { createApp } from "vue";
// @ts-ignore
import VueClassNames from "vue-classnames";
import App from "./App.vue";
import i18nPlugin from "@/plugins/i18nPlugin";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "./fontawesome";

createApp(App)
    .use(i18nPlugin)
    .use(VueClassNames)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
