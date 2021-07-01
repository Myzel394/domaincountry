<template>
    <div class="wrapper">
        <img
            class="image"
            :src="svgUrl"
            :alt="name"
        />
        <div class="gradient" />
    </div>
</template>

<script>
import { findFlagUrlByCountryName } from "country-flags-svg";

export default {
    name: "CountryFlag",
    props: {
        name: {
            type: String,
            required: true,
        },
    },
    computed: {
        svgUrl: function() {
            return findFlagUrlByCountryName(this.$props.name)
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

.wrapper {
    position: relative;
    width: 100%;
    height: fit-content;
    opacity: .1;

    .image {
        object-fit: cover;
        width: 100%;
        height: 100%;
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

}
</style>
