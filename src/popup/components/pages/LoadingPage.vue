<template>
    <FocusedPage
        :sub-text="translate('loadingPage_text')"
    >
        <LoadingCircles />
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
import LoadingCircles from "@/popup/components/functional/LoadingCircles";

export default {
    name: "LoadingPage",
    components: { LoadingCircles, FocusedPage },
}
</script>
