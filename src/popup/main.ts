import "@/utils/importWebextensionPolyfill";
import { createApp } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import i18nPlugin from "@/plugins/i18nPlugin";
import store from "./store";
import App from "./App.vue";
import "./fontawesome";

createApp(App)
    .use(store)
    .use(i18nPlugin)
    .component("font-awesome-icon", FontAwesomeIcon)
    .mount("#app")
