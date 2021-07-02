<template>
    <h1>
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

<style scoped lang="scss">
@import "src/assets/variables.scss";

h1 {
    font-size: 3rem;
    font-weight: 900;
    text-align: center;
    color: $primaryColor;
    letter-spacing: .04em;
    white-space: break-spaces;

    margin-top: .3em;
}
</style>
