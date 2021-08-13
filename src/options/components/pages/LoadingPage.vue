<template>
    <FocusedPage
        :text="$translate('loadingText')"
    />
</template>

<script>
import FocusedPage from "@/options/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>
