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
    max-width: 400px;
    margin: 0 auto;
}
</style>
