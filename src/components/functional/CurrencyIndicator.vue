<template>
    <font-awesome-icon
        :class="$classNames([className, 'indicator'])"
        :icon="iconName"
        :style="{transform: `scale(value)`}"
        :title="formattedDate"
    />
</template>

<script lang="ts">
import format from "date-fns/format";

enum Status {
    NEUTRAL = "NEUTRAL",
    PLUS = "PLUS",
    MINUS = "MINUS"
}

const CLASS_STATUS_MAP: Record<Status, string> = {
    [Status.MINUS]: "minus",
    [Status.PLUS]: "plus",
    [Status.NEUTRAL]: "neutral",
}

const ICON_STATUS_MAP: Record<Status, string> = {
    [Status.MINUS]: "minus",
    [Status.PLUS]: "plus",
    [Status.NEUTRAL]: "square",
}

export default {
    name: "CurrencyIndicator",
    props: {
        value: {
            type: Number,
            required: true,
        },
        date: {
            type: Date,
            required: true,
        },
    },
    computed: {
        status() {
            if (this.value === 1) {
                return Status.NEUTRAL;
            } else if (this.value > 1) {
                return Status.PLUS;
            } else {
                return Status.MINUS;
            }
        },
        className() {
            return CLASS_STATUS_MAP[this.status]
        },
        iconName() {
            return ICON_STATUS_MAP[this.status];
        },
        formattedDate() {
            return format(this.date, "yyyy.MM.dd");
        },
    },
}
</script>

<style scoped lang="scss">
$plusColor: #1dea8a;
$minusColor: #d71632;
$neutralColor: #ccc;

$opacity: .2;

$size: 1.4em;

.indicator {
    width: $size;
    height: $size;
    padding: .3em;
    border-radius: .5em;
}

// TODO: Loop!
.plus {
    color: $plusColor;
    background-color: rgba($plusColor, $opacity);
}

.minus {
    color: $minusColor;
    background-color: rgba($minusColor, $opacity);
}

.neutral {
    color: $neutralColor;
    background-color: rgba($neutralColor, $opacity);
}

</style>
