<template>
    <div class="wrapper">
        <LoadingCircles />
    </div>
</template>

<script>
import LoadingCircles from "@/components/functional/LoadingCircles";
export default {
    name: "LoadingPage",
    components: { LoadingCircles },
}
</script>

<style scoped>
.wrapper {
    width: 100%;
    height: 100vh;
}
</style>
