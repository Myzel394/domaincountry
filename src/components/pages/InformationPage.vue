<template>
    <Container>
        <LocationInfo />
        <InformationBoxes />
        <Times />
    </Container>
</template>

<script>
import LocationInfo from "@/components/LocationInfo";
import InformationBoxes from "@/components/InformationBoxes";
import Container from "@/components/functional/Container";
import Times from "@/components/Times";
export default {
    name: "InformationPage",
    components: { Times, Container, InformationBoxes, LocationInfo },
}
</script>

<style scoped>

</style>
