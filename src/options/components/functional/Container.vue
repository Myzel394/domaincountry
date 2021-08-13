<template>
    <div :class="$style.wrapper">
        <h1 :class="$style.title">
            <font-awesome-icon icon="cog" />
            <span>
                {{ $translate("options_settingsTitle") }}
            </span>
        </h1>
        <div :class="$style.container">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: "Container",
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.wrapper {
    display: flex;
    flex-direction: column;;
    align-items: center;
    justify-content: center;

    max-width: 90%;
    margin: 0 auto;
}

.container {
    padding: 3em;
    background-color: rgba($primaryColor, .1);
    border-radius: 1em;
}

.title {
    color: $primaryColor;
    font-size: 2rem;

    > span {
        margin-left: .2em;
    }
}
</style>
