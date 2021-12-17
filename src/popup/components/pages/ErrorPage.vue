<template>
    <FocusedPage
        :text="$translate('extra@text@error_occurred')"
        icon="sad-tear"
    >
        <template #actions>
            <Button
                :disabled="disableRetry"
                @click="$emit('retry', { isAutomaticRetry: false })"
            >
                {{ $translate("pages@popup@retry_button") }}
            </Button>
        </template>
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/popup/components/functional/FocusedPage";
import Button from "../functional/Button";

const RETRY_WAIT_DURATION = 500;

export default {
    name: "ErrorPage",
    components: { FocusedPage, Button },
    props: {
        retryAttempts: {
            type: Number,
            required: true,
        },
        disableRetry: {
            type: Boolean,
        },
    },
    data() {
        return {
            retryFunction: null,
        }
    },
    mounted() {
        const waitDuration = RETRY_WAIT_DURATION * Math.pow(2, this.retryAttempts);
        this.retryFunction = setTimeout(() => {
            this.$emit("retry", {
                isAutomaticRetry: true,
            });
        }, waitDuration);
    },
    unmounted() {
        clearTimeout(this.retryFunction)
    },
}
</script>
