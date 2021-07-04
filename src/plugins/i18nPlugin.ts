import { App } from "vue";

export default {
    install(app: App) {
        app.mixin({
            methods: {
                translate(key: string, placeholders: any[]): string {
                    return browser.i18n.getMessage(key, placeholders);
                },
            },
        })
    },
}
