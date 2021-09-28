<template>
    <FocusedPage
        :text="$translate('extra@permission_missing', ['storage'])"
        icon="database"
    />
</template>

<script>
import FocusedPage from "@/options/components/functional/FocusedPage";
export default {
    name: "NotAllowedPage",
    components: { FocusedPage },
}
</script>
