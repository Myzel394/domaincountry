<template>
    <div :class="$style.wrapper">
        <font-awesome-icon
            v-if="icon"
            :icon="icon"
            :class="$style.icon"
        />
        <p :class="$style.text">
            {{ text }}
        </p>
    </div>
</template>

<script>
export default {
    name: "FocusedPage",
    props: {
        text: {
            type: String,
            required: true,
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
    display: flex;
    flex-direction: column;;
    align-items: center;
    justify-content: center;
}

.text {
    color: $secondaryColor;
    font-size: 1rem;
}

.icon {
    width: $iconSize !important;
    height: $iconSize;
    color: $primaryColor;
    margin: 0 auto;
}
</style>
