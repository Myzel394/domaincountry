<template>
    <div :class="$style.wrapper">
        <slot />
        <p :class="$style.subText">
            {{ subText }}
        </p>
    </div>
</template>

<script>
export default {
    name: "FocusedPage",
    props: {
        subText: {
            type: String,
            required: false,
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.wrapper {
    width: 100%;
    height: 100vh;

    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

p {
    margin-bottom: 2em;

    font-size: 1.3rem;
    text-align: center;
    color: $secondaryColor;
}
</style>
