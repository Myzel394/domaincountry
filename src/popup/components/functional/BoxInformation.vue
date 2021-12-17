<template>
    <section
        ref="wrapper"
        :class="$style.box"
    >
        <h2>
            <font-awesome-icon :icon="icon" />
            <span ref="title">
                {{ title }}
            </span>
        </h2>
        <div :class="$style.container">
            <slot name="content">
                <Link
                    v-if="link"
                    :href="link"
                >
                    {{ value }}
                </Link>
                <p v-else-if="value === ''">
                    <i>
                        {{ $translate("pages@popup@empty_field") }}
                    </i>
                </p>
                <p v-else>
                    {{ value }}
                </p>
            </slot>
        </div>
    </section>
</template>

<script>
import Link from "./Link";

export default {
    name: "BoxInformation",
    components: { Link },
    props: {
        title: {
            type: String,
            required: true,
        },
        value: {
            type: String,
            required: true,
        },
        icon: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            default: "",
        },
    },
}
</script>

<style module lang="scss">
@import "src/assets/variables";

.box {
    padding: .2em 1em;
    border-radius: .6em;
    background-color: rgba($primaryColor, .1);

    .container {
        padding: .5em 2em;
    }

    h2 {
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
        text-align: left;

        margin: 0;
    }
}
@media (min-device-width: $desktopExtensionWidth) {
    .box {
        padding: .5em 2em;
    }
}
</style>
