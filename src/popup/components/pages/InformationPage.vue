<template>
    <Container>
        <LocationInfo />
        <InformationBoxes />
        <Times />
    </Container>
</template>

<script>
import LocationInfo from "@/popup/components/LocationInfo";
import InformationBoxes from "@/popup/components/InformationBoxes";
import Container from "@/popup/components/functional/Container";
import Times from "@/popup/components/Times";
export default {
    name: "InformationPage",
    components: { Times, Container, InformationBoxes, LocationInfo },
}
</script>
