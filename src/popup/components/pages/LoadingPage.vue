<template>
    <FocusedPage :text="$translate('extra@text@is_loading')">
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
