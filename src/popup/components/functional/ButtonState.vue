<template>
    <span
        :class="[$style.button, active ? $style.on : $style.off]"
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

<style module lang="scss">
@import "src/assets/variables.scss";

.button {
    display: block;
    color: $primaryColor;
    padding: .6em 1.2em;
    border-radius: 100vw;
    pointer-events: none;

    font-size: 1rem;
    font-weight: 700;
}

.on {
    background-color: rgba($primaryColor, .2);
}

.off {
    opacity: .5;

    border: .1em $primaryColor solid;
}
</style>
