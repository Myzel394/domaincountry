<template>
    <a
        v-bind="$attrs"
        :class="[$style.link, $attrs.class]"
        rel="noopener noreferrer"
    >
        <slot />
    </a>
</template>

<script>
export default {
    name: "Link",
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.link {
    color: $linkColor;
}
</style>
