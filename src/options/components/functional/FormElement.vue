<template>
    <div
        class="panel-formElements-item"
        :class="$style.item"
        v-bind="$attrs"
    >
        <label
            :for="id"
            :class="$style.label"
        >
            {{ label }}
        </label>
        <slot />
    </div>
</template>

<script>
export default {
    name: "FormElement",
    props: {
        label: {
            type: String,
            required: true,
        },
        id: {
            type: String,
            required: true,
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.label {
    color: $primaryColor;
    font-size: 1rem;
    margin-right: 1em;
    font-weight: 700;
}

.item {
    margin-bottom: 2em;
}
</style>
