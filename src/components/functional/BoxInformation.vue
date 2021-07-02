<template>
    <div
        class="box"
        ref="wrapper"
    >
        <h3>
            <slot name="icon" />
            <span ref="title">
                {{ title }}
            </span>
        </h3>
        <p :style="`margin-left: ${valueSpacing}px`">
            {{ value }}
        </p>
        <slot name="extra" />
    </div>
</template>

<script>
export default {
    name: "BoxInformation",
    props: {
        title: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            valueSpacing: 0,
        }
    },
    mounted() {
        const wrapperLeft = this.$refs.wrapper.getBoundingClientRect().left;
        const titleLeft = this.$refs.title.getBoundingClientRect().left;
        const paddingLeft = parseInt(getComputedStyle(this.$refs.wrapper).paddingLeft);
        const spacing = Math.abs(titleLeft - (wrapperLeft + paddingLeft));

        this.valueSpacing = spacing;
    },
}
</script>

<style scoped lang="scss">
@import "src/assets/variables";

.box {
    padding: .5em 2em;
    border-radius: .6em;
    background-color: rgba($primaryColor, .1);

    h3 {
        font-size: 1.4rem;
        font-weight: 700;
        color: $primaryColor;

        margin: .3em 0 .6em 0;

        > span {
            margin-left: .5em;
        }
    }

    p {
        font-size: 1rem;
        font-weight: 300;
        color: $secondaryColor;

        margin: 0 0 .5em 1.5em;
    }
}
</style>
