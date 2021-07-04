import { App } from "vue";
import { translate } from "@/utils";

export default {
    install(app: App) {
        app.mixin({
            methods: {
                translate(key: string, placeholders: any[]): string {
                    return translate(key, placeholders)
                },
            },
        })
    },
}
