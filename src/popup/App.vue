<template>
    <LoadingPage v-if="$store.state.api.domain.isLoading" />
    <LocationInfo v-else />
</template>

<script>
import LocationInfo from "@/components/LocationInfo";
import LoadingPage from "@/components/pages/LoadingPage";

export default {
    name: "App",
    components: { LoadingPage, LocationInfo },
    watch: {
        currentTab(newTab) {
            const domain = (new URL(newTab.url)).host;

            this.$store.dispatch("fetchDomain", domain);
        },
    },
}
</script>

<style lang="scss">
@import "src/assets/global";
</style>
