<template>
    <div :class="$style.wrapper">
        <progress-circle
            total-steps="12"
            circle-width="5"
            circle-color="transparent"
            start-color="#fff"
            stop-color="#fff"
            :completed-steps="calculatedOffset"
            :inner-color="fillColor"
        >
            <p
                :key="keyHack"
                :class="$style.time"
            >
                {{ formatTime() }}
            </p>
        </progress-circle>
        <p :class="$style.description">
            {{ description }}
        </p>
    </div>
</template>

<script>
import { ProgressCircle } from "vue-progress-circle"
import format from "date-fns/format";
import subHours from "date-fns/subHours";
import addHours from "date-fns/addHours";
import variables from "@/assets/variables.scss";
import tinycolor from "tinycolor2";
import * as inMilliseconds from "in-milliseconds";

const UPDATE_INTERVAL = inMilliseconds.seconds(5);

export default {
    name: "Clock",
    components: {
        ProgressCircle,
    },
    props: {
        offsetHours: {
            type: Number,
            required: true,
        },
        description: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            keyHack: 0,
        }
    },
    mounted() {
        this.updateTimer();
    },
    beforeUnmount() {
        clearTimeout(this.$options.timer);
    },
    computed: {
        fillColor() {
            return tinycolor(variables.primaryColor).setAlpha(.1).toString();
        },
        calculatedOffset() {
            if (this.offsetHours === 0) {
                return 0
            }

            const localOffset = (new Date()).getTimezoneOffset() * -1 / 60;
            return this.offsetHours - localOffset;
        },
    },
    methods: {
        updateTimer() {
            this.keyHack += 1;
            this.$options.timer = window.setTimeout(this.updateTimer, UPDATE_INTERVAL);
        },
        formatTime() {
            const offset = this.calculatedOffset;
            let date = new Date();

            if (offset < 0) {
                date = subHours(date, Math.abs(offset))
            } else if (offset > 0) {
                date = addHours(date, offset);
            }

            return format(date, "H:mm")
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
}

.time {
    font-size: 1.5rem;
    color: $primaryColor;

    margin: 0;
}

.description {
    color: $secondaryColor;
}
</style>
