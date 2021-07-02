import { App } from "vue";
import Tab = browser.tabs.Tab;

export interface CurrentTabPluginData {
    currentTab: Tab | "LOADING" | "ERROR";
}

export default {
    install(app: App) {
        app.mixin({
            data() {
                return {
                    currentTab: "LOADING",
                } as CurrentTabPluginData;
            },
            created() {
                // Initial
                this.fetchCurrentTab();
            },
            beforeUnmount() {
                browser.tabs.onActivated.removeListener(this.tabListener);
            },
            methods: {
                async fetchCurrentTab() {
                    try {
                        const tabs = await browser.tabs.query({
                            active: true,
                            windowId: browser.windows.WINDOW_ID_CURRENT,
                        });

                        if (!tabs[0].id) {
                            throw new Error("Tab undefined");
                        }

                        const tab = await browser.tabs.get(tabs[0].id);

                        this.$data.currentTab = tab;
                    } catch {
                        this.$data.currentTab = "ERROR";
                    }
                },
            },
        })

    },
}
