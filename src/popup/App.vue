<template>
    <div>
        <ErrorPage v-if="$store.getters.isError" />
        <LoadingPage v-else-if="!$store.getters.isReady" />
        <InformationPage v-else />
    </div>
</template>

<script>
import ErrorPage from "@/components/pages/ErrorPage";
import LoadingPage from "@/components/pages/LoadingPage";
import InformationPage from "@/components/pages/InformationPage";

export default {
    name: "App",
    components: { ErrorPage, LoadingPage, InformationPage },
    created() {
        this.$store.dispatch("fetchInitialData");
    },
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
