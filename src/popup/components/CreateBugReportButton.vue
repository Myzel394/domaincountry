<template>
    <button
        :class="$style.button"
        @click="createReport"
    >
        {{ $translate('pages@popup@extra@create_bug_report') }}
    </button>
</template>

<script>
import copy from "copy-to-clipboard";
import { createBugReport } from "@/utils/popup";

export default {
    name: "CreateBugReportButton",
    methods: {
        createReport() {
            const result = createBugReport();

            copy(result);
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables.scss";

.button {
    background: transparent;
    color: $primaryColor;
    padding: .6em 1.2em;
    border: .1em rgba($primaryColor, .2) solid;
    border-radius: .5em;
    cursor: pointer;

    font-size: .8rem;
    font-weight: 700;
}

.button:active {
    background: rgba($primaryColor, .2);
}
</style>
