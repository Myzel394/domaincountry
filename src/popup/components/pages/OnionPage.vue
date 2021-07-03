<template>
    <FocusedPage
        sub-text="This is an onion service. You can't find out it's location."
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
