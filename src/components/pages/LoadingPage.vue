<template>
    <FocusedPage sub-text="Loading">
        <LoadingCircles />
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/components/functional/FocusedPage";
import LoadingCircles from "@/components/functional/LoadingCircles";

export default {
    name: "LoadingPage",
    components: { LoadingCircles, FocusedPage },
}
</script>
