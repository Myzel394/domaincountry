<template>
    <div :class="$style.wrapper">
        <slot />
        <font-awesome-icon
            v-if="icon"
            :class="$style.icon"
            :icon="icon"
        />
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
        icon: {
            type: String,
            required: false,
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";
$iconSize: 8rem;

.wrapper {
    width: 100%;
    height: 100vh;

    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

.subText {
    margin: 0 auto 2em auto;

    font-size: 1.3rem;
    text-align: center;
    color: $secondaryColor;

    max-width: 80%;
}

.icon {
    width: $iconSize !important;
    height: $iconSize;
    color: $primaryColor;
    margin: 0 auto;
}
</style>
