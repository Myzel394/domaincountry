<template>
    <div class="wrapper">
        <slot />
    </div>
</template>

<script>
export default {
    name: "Container",
}
</script>

<style scoped>
.wrapper {
    max-width: 400px;
    margin: 0 auto;
}
</style>
