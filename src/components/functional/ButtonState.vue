<template>
    <span
        :class="$classNames(['button', active ? 'on' : 'off'])"
    >
        {{ name }}
    </span>
</template>

<script>

export default {
    name: "ButtonState",
    props: {
        active: {
            type: Boolean,
            required: false,
        },
        name: {
            type: String,
            required: true,
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

.button {
    color: $primaryColor;
    padding: .6em 1.2em;
    border-radius: 100vw;
    pointer-events: none;

    font-size: 1rem;
    font-weight: 700;

    &.on {
        background-color: rgba($primaryColor, .2);
    }

    &.off {
        opacity: .5;

        border: .1em $primaryColor solid;
    }
}

</style>
