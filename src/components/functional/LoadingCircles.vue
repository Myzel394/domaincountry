<template>
    <div class="center">
        <div class="wrapper">
            <div
                v-for="index of Array(3).fill(null)"
                class="dot"
                :key="index"
            />
        </div>
        <p>Loading</p>
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

.center {
    display: flex;
    align-content: center;
    justify-content: center;
    flex-direction: column;

    width: 100%;
    height: 100%;

    p {
        margin-bottom: 2em;

        font-size: 1.3rem;
        text-align: center;
        color: $secondaryColor;
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
