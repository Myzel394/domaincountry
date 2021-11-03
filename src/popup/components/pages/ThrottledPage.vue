<template>
    <FocusedPage
        :sub-text="$translate('pages@popup@is_throttled@text')"
        icon="running"
    >
        <template #actions>
            <Button @click="$emit('retry', $event)">
                {{ $translate("pages@popup@is_throttled@retry_button") }}
            </Button>
        </template>
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
import Button from "../functional/Button";

export default {
    name: "ThrottledPage",
    components: { Button, FocusedPage },
}
</script>
