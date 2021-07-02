<template>
    <h2 :class="$style.title">
        {{ domain }}
    </h2>
</template>

<script>
export default {
    name: "DomainCaption",
    props: {
        url: {
            type: String,
            required: true,
        },
    },
    computed: {
        domain() {
            return (new URL(this.url)).host;
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables.scss";

.title {
    font-size: 1.2rem;
    font-weight: 500;
    text-align: center;
    color: $secondaryColor;

    margin-top: 2em;
    margin-bottom: 0;
}
</style>
