<template>
    <div
        :class="$style.wrapper"
    >
        <Clock
            :offset-hours="0"
            :description="$translate('popup_clock_yourTime')"
        />
        <Clock
            :offset-hours="offsetHours"
            :description="$translate('popup_clock_serverTime')"
        />
        {{ isUsingFakeTime }}
    </div>
</template>

<script>
import Clock from "@/popup/components/functional/Clock";
import { getIsResistingFingerprinting } from "@/utils/popup";

export default {
    name: "Times",
    components: { Clock },
    data() {
        return {
            isUsingFakeTime: false,
        }
    },
    computed: {
        offsetHours() {
            return this.$store.getters.data.timezone.offset / (60 * 60);
        },
    },
    mounted() {
        getIsResistingFingerprinting()
            .then(value => {
                this.isUsingFakeTime = value;
            });
    },
}
</script>

<style module>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
