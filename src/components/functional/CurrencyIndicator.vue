<template>
    <font-awesome-icon
        :class="$classNames([className, $style.indicator])"
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
        classStatusMap(): Record<Status, string> {
            return {
                // @ts-ignore
                [Status.MINUS]: this.$style.minus,
                // @ts-ignore
                [Status.PLUS]: this.$style.plus,
                // @ts-ignore
                [Status.NEUTRAL]: this.$style.neutral,
            }
        },
        status(): Status {
            // @ts-ignore
            if (this.value === 1) {
                return Status.NEUTRAL;
                // @ts-ignore
            } else if (this.value > 1) {
                return Status.PLUS;
            } else {
                return Status.MINUS;
            }
        },
        className(): string {
            // @ts-ignore
            return CLASS_STATUS_MAP[this.status]
        },
        iconName(): string {
            // @ts-ignore
            return this.classStatusMap[this.status];
        },
        formattedDate(): string {
            // @ts-ignore
            return format(this.date, "yyyy.MM.dd");
        },
    },
}
</script>

<style module lang="scss">
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
