<template>
    <LocalHostPage v-if="$store.getters.isLocalHost" />
    <OnionPage v-else-if="$store.getters.isOnionAddress" />
    <LoadingPage v-else-if="!$store.getters.isReady" />
    <ErrorPage v-else-if="$store.getters.isError" />
    <InformationPage v-else />
</template>

<script>
import LocalHostPage from "./components/pages/LocalHostPage";
import OnionPage from "./components/pages/OnionPage";
import ErrorPage from "./components/pages/ErrorPage";
import InformationPage from "./components/pages/InformationPage";
import LoadingPage from "./components/pages/LoadingPage";

export default {
    name: "App",
    components: { LoadingPage, InformationPage, ErrorPage, OnionPage, LocalHostPage },
    created() {
        this.$store.dispatch("fetchInitialData");
    },
}
</script>

<style lang="scss">
@import "src/assets/global";

html, body, #app {
    min-width: 450px;
    min-height: 450px;
}
</style>
