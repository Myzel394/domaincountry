<template>
    <aside>
        <ul :class="$style.wrapper">
            <li
                v-for="({name, active}, index) of buttons"
                :key="name"
                :class="$style.buttonAnimation"
                :style="`animation-delay: ${index * 100}ms`"
            >
                <ButtonState
                    :name="name"
                    :active="active"
                />
            </li>
        </ul>
    </aside>
</template>

<script>
import ButtonState from "@/popup/components/functional/ButtonState";

export default {
    name: "Buttons",
    components: { ButtonState },
    computed: {
        buttons() {
            return [
                {
                    name: this.$translate("pages@popup@state@is_proxy"),
                    active: this.$store.getters.data.isProxy,
                },
                {
                    name: this.$translate("pages@popup@state@is_hosting"),
                    active: this.$store.getters.data.isHosting,
                },
                {
                    name: this.$translate("pages@popup@state@is_mobile"),
                    active: this.$store.getters.data.isMobile,
                },
                {
                    name: this.$translate("pages@popup@state@is_mx"),
                    active: this.$store.getters.data.isMX,
                },
                {
                    name: this.$translate("pages@popup@state@is_disposable"),
                    active: this.$store.getters.data.isDisposable,
                },
            ]
        },
    },
}
</script>

<style module lang="scss">
@keyframes buttonIn {
    0% {
        opacity: 0;
        transform: scale(.9);
    }
    80% {
        opacity: 1;
    }
    100% {
        opacity: 1;
        transform: scale(1);
    }
}

.wrapper {
    display: flex;
    align-items: center;
    padding-left: 0;
    flex-shrink: 0;

    > li {
        list-style: none;
        padding: 0 .6em;
    }
}

.buttonAnimation {
    opacity: 0;
    transform: scale(.9);

    animation: buttonIn .2s ease-out forwards;
}

@media (prefers-reduced-motion: reduce) {
    .buttonAnimation {
        animation: none;
    }
}
</style>
