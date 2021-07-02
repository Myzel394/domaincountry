<template>
    <div :class="$style.container">
        <div :class="$style.wrapper">
            <img
                :class="$style.image"
                :src="svgUrl"
                :alt="`Flag of country with code ${code}`"
            />
            <div :class="$style.gradient" />
        </div>
    </div>
</template>

<script>
import { findFlagUrlByIso2Code } from "country-flags-svg";

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
            return findFlagUrlByIso2Code(this.$props.code)
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables.scss";

.container {
    position: absolute;
    left: 0;
    top: 0;

    pointer-events: none;
    z-index: -1;
}

.wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
    opacity: .1;
}

.image {
    object-fit: cover;
    width: 450px;
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
        rgba($backgroundColor, 0) 90%,
        rgba($backgroundColor, 1) 100%
    );
}
</style>
