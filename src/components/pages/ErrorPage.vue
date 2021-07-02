<template>
    <FocusedPage sub-text="There was an error. We are sorry.">
        <font-awesome-icon
            class="icon"
            icon="sad-tear"
        />
    </FocusedPage>
</template>

<script>
import FocusedPage from "@/components/functional/FocusedPage";
export default {
    name: "ErrorPage",
    components: { FocusedPage },
}
</script>

<style scoped lang="scss">
@import "src/assets/variables";

$size: 8em;

.icon {
    color: $primaryColor;
    width: $size;
    height: $size;
    margin: 0 auto;
}
</style>
