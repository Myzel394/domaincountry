<template>
    <FocusedPage
        :sub-text="$translate('pages@popup@is_onion_address@text')"
        icon="mask"
    />
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
export default {
    name: "OnionPage",
    components: { FocusedPage },
}
</script>
