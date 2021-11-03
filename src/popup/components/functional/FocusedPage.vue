<template>
    <div :class="$style.wrapper">
        <slot />
        <font-awesome-icon
            v-if="icon"
            :class="$style.icon"
            :icon="icon"
        />
        <div :class="$style.description">
            <p :class="$style.text">
                {{ text }}
            </p>
            <p
                v-if="subText"
                :class="$style.subText"
            >
                {{ subText }}
            </p>
        </div>
        <slot name="actions" />
    </div>
</template>

<script>
export default {
    name: "FocusedPage",
    props: {
        text: {
            type: String,
            required: false,
        },
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

.description {
    margin: 2em auto;
    width: 100%;
}

.text {
    margin: .5em auto;

    font-size: 1.5rem;
    text-align: center;
    color: $primaryColor;

    max-width: 80%;
}

.subText {
    margin: .5em auto;

    font-size: .9rem;
    font-weight: 100;
    line-height: 1.6;
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
