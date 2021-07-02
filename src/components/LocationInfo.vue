<template>
    <CountryFlag :code="$store.state.api.domain.data.country.code" />
    <DomainCaption :url="$store.state.currentTab.tab.url" />
    <LocationTitle
        :country="$store.state.api.domain.data.country.name"
        :city="$store.state.api.domain.data.cityName"
    />
    <StateButtons />
</template>

<script>
import CountryFlag from "./functional/CountryFlag";
import DomainCaption from "./functional/DomainCaption";
import LocationTitle from "./functional/LocationTitle";
import StateButtons from "./StateButtons";

export default {
    name: "LocationInfo",
    components: { CountryFlag, DomainCaption, LocationTitle, StateButtons },
}
</script>

<style scoped>

</style>
