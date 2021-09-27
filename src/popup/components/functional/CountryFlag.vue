<template>
    <div :class="$style.container">
        <div :class="$style.wrapper">
            <img
                :class="$style.image"
                :src="svgUrl"
                :alt="$translate('pages@popup@flag_image@alt_text', code)"
            />
            <div :class="$style.gradient" />
        </div>
    </div>
</template>

<script>
import { getFlagPath } from "@/utils";

export default {
    name: "CountryFlag",
    props: {
        code: {
            type: String,
            required: true,
        },
    },
    computed: {
        svgUrl: function() {
            return getFlagPath(this.code, { format: "SVG" })
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables.scss";

@keyframes flagMoveIn {
    0% {
        transform: translateY(-1em);
    }
    100% {
        transform: none;
    }
}

.container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    pointer-events: none;
    z-index: -1;

    animation: flagMoveIn 1s ease-out;
}

.wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
    opacity: .1;
}

.image {
    object-fit: cover;
    width: 100%;
    height: 100%;
    max-height: 18em;
}

.gradient {
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;

    z-index: 1;
    background-image: linear-gradient(
        180deg,
        rgba($backgroundColor, 0) 0%,
        rgba($backgroundColor, 0) 70%,
        rgba($backgroundColor, 1) 100%
    );
}

@media (prefers-reduced-motion: reduce) {
    .container {
        animation: none;
    }
}
</style>
