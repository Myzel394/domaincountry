<template>
    <div
        class="wrapper"
        v-if="timersRequired"
    >
        <Clock
            :offset-hours="0"
            description="Your time"
        />
        <Clock
            :offset-hours="offsetHours"
            description="Server's time"
        />
    </div>
</template>

<script>
import Clock from "@/components/functional/Clock";
import { getOffsetDifference } from "@/utils";
export default {
    name: "Times",
    components: { Clock },
    computed: {
        offsetHours() {
            return this.$store.state.api.domain.data.timezone.offset / (60 * 60);
        },
        timersRequired() {
            const difference = getOffsetDifference(this.offsetHours);

            return difference !== 0;
        },
    },
}
</script>

<style scoped>
.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}
</style>
