import { createApp } from "vue";
import VueClassNames from "vue-classnames";
import CurrentTabPlugin from "@/plugins/CurrentTabPlugin";
import store from "@/store";
import App from "./App.vue";

createApp(App)
    .use(VueClassNames)
    .use(store)
    .use(CurrentTabPlugin)
    .mount("#app")
