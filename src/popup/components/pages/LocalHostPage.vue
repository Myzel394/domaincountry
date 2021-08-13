<template>
    <FocusedPage
        :sub-text="$translate('popup_localHostPage_text')"
        icon="home"
    />
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
export default {
    name: "LocalHostPage",
    components: { FocusedPage },
}
</script>
