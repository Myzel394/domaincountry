<template>
    <FocusedPage
        :sub-text="translate('errorPage_text')"
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
