<template>
    <div :class="$style.container">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Container",
}
</script>

<style module>
.container {
    max-width: 90%;
    margin: 0 auto;
    padding-bottom: 1em;
}
</style>
