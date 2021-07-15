<template>
    <CountryFlag
        v-bind="$attrs"
        :code="$store.getters.data.country.code"
    />
    <DomainCaption :url="$store.state.currentTab.tab.url" />
    <LocationTitle
        :country="$store.getters.data.country.name"
        :city="$store.getters.data.cityName"
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
