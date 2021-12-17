<template>
    <div>
        <div
            :class="$style.wrapper"
        >
            <Clock
                :offset-hours="0"
                :description="$translate('pages@popup@clock@your_time')"
            />
            <Clock
                :offset-hours="offsetHours"
                :description="$translate('pages@popup@clock@server_time')"
            />
        </div>
        <p
            v-if="isUsingFakeTime"
            :class="$style.description"
        >{{ $translate("pages@popup@clock@user_uses_resist_fingerprinting") }}</p>
    </div>
</template>

<script>
import Clock from "@/popup/components/functional/Clock";
import { isResistingFingerprinting } from "@/utils/popup";

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
        isResistingFingerprinting()
            .then(value => {
                this.isUsingFakeTime = value;
            });
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
}

.description {
    color: $secondaryColor;
    font-size: .8rem;
}
</style>
