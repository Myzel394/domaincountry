<template>
    <FocusedPage
        :text="$translate('options_storageNotAllowed')"
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
