<template>
    <div
        :class="$style.wrapper"
    >
        <Clock
            :offset-hours="0"
            :description="translate('popup_clock_yourTime')"
        />
        <Clock
            :offset-hours="offsetHours"
            :description="translate('popup_clock_serverTime')"
        />
    </div>
</template>

<script>
import Clock from "@/popup/components/functional/Clock";
export default {
    name: "Times",
    components: { Clock },
    computed: {
        offsetHours() {
            return this.$store.state.api.domain.data.timezone.offset / (60 * 60);
        },
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
