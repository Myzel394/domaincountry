<template>
    <FocusedPage
        :sub-text="$translate('pages@popup@is_local_host@text')"
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
