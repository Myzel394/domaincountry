<template>
    <Button @click="createReport">
        {{ $translate("pages@popup@extra@create_bug_report") }}
    </Button>
</template>

<script>
import copy from "copy-to-clipboard";
import { createBugReport } from "@/utils/popup";
import Button from "./functional/Button";

export default {
    name: "CreateBugReportButton",
    components: { Button },
    methods: {
        createReport() {
            const result = createBugReport();

            copy(result);
        },
    },
}
</script>
