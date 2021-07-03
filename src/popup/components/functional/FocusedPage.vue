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

$size: 8em;

.wrapper {
    width: 100%;
    height: 100vh;

    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;
}

.subText {
    margin-bottom: 2em;

    font-size: 1.3rem;
    text-align: center;
    color: $secondaryColor;
}

.icon {
    width: $size !important;
    height: $size;
    color: $primaryColor;
    margin: 0 auto;
}
</style>
