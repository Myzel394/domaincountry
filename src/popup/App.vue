<template>
    <ErrorPage
        v-if="isRetryingAutomatically || $store.getters.isError"
        :retry-attempts="retryAttempts"
        :disable-retry="isRetryingAutomatically"
        @retry="retryUpdate"
    />
    <LocalHostPage v-else-if="$store.getters.isLocalHost" />
    <OnionPage v-else-if="$store.getters.isOnionAddress" />
    <ThrottledPage
        v-else-if="$store.state.api.domain.isThrottled"
        @retry="retryUpdate"
    />
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
import ThrottledPage from "./components/pages/ThrottledPage";

export default {
    name: "App",
    components: { ThrottledPage, LoadingPage, InformationPage, ErrorPage, OnionPage, LocalHostPage },
    data() {
        return {
            retryAttempts: 0,
            isRetryingAutomatically: false,
        }
    },
    created() {
        this.updateContent();

        // Sidebar supported
        if (typeof browser !== "undefined" && browser.sidebarAction) {
            browser.tabs.onActivated.addListener(this.updateContent);
            browser.tabs.onUpdated.addListener(this.updateContent);
        }
    },
    methods: {
        async updateContent() {
            const oldTab = this.$store.state.currentTab.tab;
            const newTab = await getCurrentTab();

            if (
                !oldTab ||
                (getDomain(oldTab.url) !== getDomain(newTab.url))
            ) {
                this.$store.dispatch("fetchInitialData");
            }
        },
        async retryUpdate({ isAutomaticRetry }) {
            this.retryAttempts += 1;
            this.isRetryingAutomatically = isAutomaticRetry;
            await this.$store.dispatch("retryFetch");
            this.isRetryingAutomatically = false;
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
