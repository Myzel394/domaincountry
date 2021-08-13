import { App } from "vue";
import { translate } from "@/utils";

export default {
    install(app: App) {
        app.config.globalProperties.$translate = (
            key: string,
            placeholders?: any[],
        ): string =>
            translate(key, placeholders)
    },
}
