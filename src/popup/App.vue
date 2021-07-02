<template>
    <InformationPage v-if="$store.state.api.domain.data && !$store.state.currentTab.isLoading" />
    <LoadingPage v-else />
</template>

<script>
import LoadingPage from "@/components/pages/LoadingPage";
import InformationPage from "@/components/pages/InformationPage";

export default {
    name: "App",
    components: { InformationPage, LoadingPage },
    watch: {
        currentTab(newTab) {
            const domain = (new URL(newTab.url)).host;

            this.$store.dispatch("getCurrentTab");
            this.$store.dispatch("fetchDomain", domain);
        },
    },
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
