<template>
    <ErrorPage v-if="$store.getters.isError" />
    <LoadingPage v-else-if="!$store.getters.isReady" />
    <InformationPage v-else />
</template>

<script>
import LoadingPage from "@/components/pages/LoadingPage";
import InformationPage from "@/components/pages/InformationPage";
import ErrorPage from "@/components/pages/ErrorPage";

export default {
    name: "App",
    components: { ErrorPage, InformationPage, LoadingPage },
    created() {
        this.$store.dispatch("fetchInitialData");
    },
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
