import { createApp } from "vue";
import App from "./App.vue";
import CurrentTabPlugin from "@/plugins/CurrentTabPlugin";
import store from "@/store";

createApp(App)
    .use(store)
    .use(CurrentTabPlugin)
    .mount("#app")
