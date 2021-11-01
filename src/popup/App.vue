<template>
    <LocalHostPage v-if="$store.getters.isLocalHost" />
    <OnionPage v-else-if="$store.getters.isOnionAddress" />
    <ErrorPage v-else-if="$store.getters.isError" />
    <LoadingPage v-else-if="$store.getters.isLoading" />
    <InformationPage v-else />
</template>

<script>
import LocalHostPage from "./components/pages/LocalHostPage";
import OnionPage from "./components/pages/OnionPage";
import ErrorPage from "./components/pages/ErrorPage";
import InformationPage from "./components/pages/InformationPage";
import LoadingPage from "./components/pages/LoadingPage";
import { getCurrentTab, getDomain } from "@/utils";

export default {
    name: "App",
    components: { LoadingPage, InformationPage, ErrorPage, OnionPage, LocalHostPage },
    created() {
        this.updateContent();

        // Sidebar supported
        if (browser?.sidebarAction) {
            browser.tabs.onActivated.addListener(this.updateContent);
            browser.tabs.onUpdated.addListener(this.updateContent);
        }
    },
    methods: {
        async updateContent() {
            const oldTab = this.$store.state.currentTab.tab;
            const newTab = await getCurrentTab();

            if (
                oldTab === null ||
                (getDomain(oldTab.url) !== getDomain(newTab.url))
            ) {
                this.$store.dispatch("fetchInitialData");
            }
        },
    },
}
</script>

<style lang="scss">
@import "src/assets/global";

html, body, #app {
    font-size: 16px;
    min-height: 450px;
}

@media (min-device-width: $desktopExtensionWidth) {
    html, body, #app {
        min-width: 450px;
        max-width: 550px;
    }
}
</style>
