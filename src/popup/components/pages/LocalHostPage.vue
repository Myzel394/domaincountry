<template>
    <FocusedPage
        :sub-text="translate('localHostPage_text')"
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
