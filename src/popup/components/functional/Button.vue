<template>
    <button
        v-bind="$attrs"
        :class="$style.button"
    >
        <slot />
    </button>
</template>

<script>
export default {
    name: "Button",
}
</script>

<style lang="scss" module>
@import "src/assets/variables.scss";

.button {
    background: transparent;
    color: $primaryColor;
    padding: .6em 1.2em;
    border: .1em rgba($primaryColor, .2) solid;
    border-radius: .5em;
    cursor: pointer;

    font-size: .8rem;
    font-weight: 700;

    max-width: 15rem;
    margin-left: auto;
    margin-right: auto;
}

.button:active {
    background: rgba($primaryColor, .2);
}
</style>
