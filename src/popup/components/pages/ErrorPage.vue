<template>
    <FocusedPage
        :text="$translate('extra@text@error_occurred')"
        icon="sad-tear"
    >
        <template #actions>
            <Button @click="$emit('retry', $event)">
                {{ $translate("pages@popup@retry_button") }}
            </Button>
        </template>
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>
