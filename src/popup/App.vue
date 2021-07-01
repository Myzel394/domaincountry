<template>
    <CountryFlag
        name="Germany"
    />
</template>

<script>
import { findFlagUrlByIso2Code } from "country-flags-svg";
import CountryFlag from "@/components/CountryFlag";

export default {
    name: "App",
    components: { CountryFlag },
    data() {
        return {
            svgUrl: findFlagUrlByIso2Code("de"),
        }
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
