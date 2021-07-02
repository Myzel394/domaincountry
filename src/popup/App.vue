<template>
    <CountryFlag
        v-if="$store.state.api.domain.data.country.code"
        :code="$store.state.api.domain.data.country.code"
    />
    <DomainCaption
        v-if="currentTab?.url"
        :url="currentTab.url"
    />
</template>

<script>
import CountryFlag from "@/components/CountryFlag";
import DomainCaption from "@/components/DomainCaption";

export default {
    name: "App",
    components: { DomainCaption, CountryFlag },
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

* {
    font-family: "Roboto", Roboto, Helvetica Neue, Helvetica, Google Sans, Arial, sans-serif;
    box-sizing: border-box;
}
</style>
