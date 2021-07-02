<template>
    <Container>
        <LocationInfo />
        <InformationBoxes />
    </Container>
</template>

<script>
import LocationInfo from "@/components/LocationInfo";
import InformationBoxes from "@/components/InformationBoxes";
import Container from "@/components/functional/Container";
export default {
    name: "InformationPage",
    components: { Container, InformationBoxes, LocationInfo },
}
</script>

<style scoped>

</style>
