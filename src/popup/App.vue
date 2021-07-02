<template>
    <CountryFlag
        v-if="$store.state.api.domain.data.country.code"
        :code="$store.state.api.domain.data.country.code"
    />
    <DomainCaption
        v-if="currentTab?.url"
        :url="currentTab.url"
    />
    <LocationTitle
        v-if="$store.state.api.domain.data.country.name"
        :country="$store.state.api.domain.data.country.name"
        :city="$store.state.api.domain.data.cityName"
    />
    <StateButtons
        v-if="$store.state.api.domain.data.country.name"
    />
</template>

<script>
import CountryFlag from "@/components/functional/CountryFlag";
import DomainCaption from "@/components/functional/DomainCaption";
import LocationTitle from "@/components/functional/LocationTitle";
import StateButtons from "@/components/StateButtons";

export default {
    name: "App",
    components: { LocationTitle, DomainCaption, CountryFlag, StateButtons },
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
