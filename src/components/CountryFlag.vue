<template>
    <div class="container">
        <div class="wrapper">
            <img
                class="image"
                :src="svgUrl"
                :alt="name"
            />
            <div class="gradient" />
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

<style scoped lang="scss">
@import "src/assets/variables.scss";

.container {
    position: absolute;
    left: 0;
    top: 0;
    pointer-events: none;

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
}
</style>
