<template>
    <FocusedPage sub-text="Loading">
        <LoadingCircles />
    </FocusedPage>
</template>

<script>
import LoadingCircles from "@/components/functional/LoadingCircles";
import FocusedPage from "@/components/functional/FocusedPage";
export default {
    name: "LoadingPage",
    components: { FocusedPage, LoadingCircles },
}
</script>
