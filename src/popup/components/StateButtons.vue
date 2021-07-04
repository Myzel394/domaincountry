<template>
    <aside>
        <ul :class="$style.wrapper">
            <li
                v-for="({name, active}) of buttons"
                :key="name"
                :class="$style.buttonAnimation"
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
                    name: this.translate("popup_state_isProxy"),
                    active: this.$store.state.api.domain.data.isProxy,
                },
                {
                    name: this.translate("popup_state_isHosting"),
                    active: this.$store.state.api.domain.data.isHosting,
                },
                {
                    name: this.translate("popup_state_isMobile"),
                    active: this.$store.state.api.domain.data.isMobile,
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

.buttonAnimation:nth-of-type(2) {
    animation-delay: .1s;
}

.buttonAnimation:nth-of-type(3) {
    animation-delay: .2s;
}

@media (prefers-reduced-motion: reduce) {
    .buttonAnimation {
        animation: none;
    }
}
</style>
