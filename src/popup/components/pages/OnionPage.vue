<template>
    <FocusedPage
        :sub-text="$translate('popup_onionPage_text')"
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
