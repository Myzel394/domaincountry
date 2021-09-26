import "@/utils/importWebextensionPolyfill";
import { createApp } from "vue";
import App from "./App.vue";
import i18nPlugin from "@/plugins/i18nPlugin";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import "./fontawesome";

createApp(App)
    .use(i18nPlugin)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
