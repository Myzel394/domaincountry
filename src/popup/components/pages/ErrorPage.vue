<template>
    <FocusedPage
        sub-text="There was an error. We are sorry."
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
