<template>
    <FocusedPage
        :text="$translate('extra@text@error_occurred')"
        icon="sad-tear"
    />
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>
