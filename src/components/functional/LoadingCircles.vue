<template>
    <div class="wrapper">
        <div
            v-for="index of Array(3).fill(null)"
            class="dot"
            :key="index"
        />
    </div>
</template>

<script>
export default {
    name: "LoadingCircles",
}
</script>

<style scoped lang="scss">
@import "src/assets/variables";

$size: 3em;

@keyframes grow {
    0%, 50%, 100% {
        opacity: .4;
        transform: none;
    }
    25% {
        transform: scale(1.5);
        opacity: 1;
    }
}

.wrapper {
    display: flex;
    margin: 0 auto;

    .dot {
        opacity: .4;
        width: $size;
        height: $size;
        margin-left: 5em;
        border-radius: 50%;

        background-color: $primaryColor;

        animation: grow 1s linear infinite;
    }

    .dot:nth-of-type(1) {
        margin-left: 0;
    }

    .dot:nth-of-type(2) {
        animation-delay: .2s;
    }

    .dot:nth-of-type(3) {
        animation-delay: .4s;
    }
}
</style>
