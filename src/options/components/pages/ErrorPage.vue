<template>
    <FocusedPage
        :text="translate('errorText')"
        icon="sad-tear"
    />
</template>

<script>
import FocusedPage from "@/options/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>
