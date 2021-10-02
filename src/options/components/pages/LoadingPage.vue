<template>
    <FocusedPage
        :text="$translate('extra@text@is_loading')"
    />
</template>

<script>
import FocusedPage from "@/options/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>
