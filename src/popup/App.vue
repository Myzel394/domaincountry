<template>
    <CountryFlag
        v-if="$store.state.api.domain.data.country.code"
        :code="$store.state.api.domain.data.country.code"
    />
    <h1>
        {{ $store.state }}
    </h1>
</template>

<script>
import CountryFlag from "@/components/CountryFlag";

export default {
    name: "App",
    components: { CountryFlag },
    watch: {
        currentTab(newTab) {
            const domain = (new URL(newTab.url)).host;

            this.$store.dispatch("fetchDomain", domain);
        },
    },
}
</script>

<style lang="scss">
@import "src/assets/variables.scss";

html {
    margin: 0;
    padding: 0;
    width: 450px;
    height: 600px;

    background: $backgroundColor;
    border-radius: 2em;
}

body {
    margin: 0;
    height: 0;
    border-radius: 2em;
}
</style>
