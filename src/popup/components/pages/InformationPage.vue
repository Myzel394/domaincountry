<template>
    <Container>
        <LocationInfo />
        <InformationBoxes />
        <Times />
        <CreateBugReportButton />
    </Container>
</template>

<script>
import LocationInfo from "@/popup/components/LocationInfo";
import InformationBoxes from "@/popup/components/InformationBoxes";
import Container from "@/popup/components/functional/Container";
import Times from "@/popup/components/Times";
import CreateBugReportButton from "../CreateBugReportButton";
export default {
    name: "InformationPage",
    components: { CreateBugReportButton, Times, Container, InformationBoxes, LocationInfo },
}
</script>
