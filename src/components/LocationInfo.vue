<template>
    <Container>
        <CountryFlag :code="$store.state.api.domain.data.country.code" />
        <DomainCaption :url="currentTab.url" />
        <LocationTitle
            :country="$store.state.api.domain.data.country.name"
            :city="$store.state.api.domain.data.cityName"
        />
        <StateButtons />
    </Container>
</template>

<script>
import Container from "./functional/Container";
import CountryFlag from "./functional/CountryFlag";
import DomainCaption from "./functional/DomainCaption";
import LocationTitle from "./functional/LocationTitle";
import StateButtons from "./StateButtons";

export default {
    name: "LocationInfo",
    components: { Container, CountryFlag, DomainCaption, LocationTitle, StateButtons },
}
</script>

<style scoped>

</style>
