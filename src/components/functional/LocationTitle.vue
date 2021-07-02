<template>
    <h1 :class="$style.title">
        {{ country }}, {{ city }}
    </h1>
</template>

<script>
export default {
    name: "LocationTitle",
    props: {
        country: {
            type: String,
            required: true,
        },
        city: {
            type: String,
            required: true,
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables.scss";

.title {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    color: $primaryColor;
    letter-spacing: .02em;
    white-space: break-spaces;

    margin-top: .2em;
}
</style>
