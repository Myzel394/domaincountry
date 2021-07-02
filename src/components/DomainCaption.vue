<template>
    <h2>
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
            const url = new URL(this.url);

            return url.host;
        },
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/variables.scss";

h2 {
    color: $secondaryColor;
    font-size: 1.5rem;
    text-align: center;
}
</style>
