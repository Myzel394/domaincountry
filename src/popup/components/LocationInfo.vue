<template>
    <CountryFlag
        v-bind="$attrs"
        :code="$store.getters.data.country.code"
    />
    <DomainCaption :url="getUrl($store.state.currentTab.tab.url)" />
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
import { getUrl } from "@/utils"

export default {
    name: "LocationInfo",
    components: { CountryFlag, DomainCaption, LocationTitle, StateButtons },
    methods: {
        getUrl,
    },
}
</script>
