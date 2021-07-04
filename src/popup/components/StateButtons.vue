<template>
    <aside>
        <ul :class="$style.wrapper">
            <li
                v-for="({name, active}) of buttons"
                :key="name"
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
                    name: this.translate("state_isProxy"),
                    active: this.$store.state.api.domain.data.isProxy,
                },
                {
                    name: this.translate("state_isHosting"),
                    active: this.$store.state.api.domain.data.isHosting,
                },
                {
                    name: this.translate("state_isMobile"),
                    active: this.$store.state.api.domain.data.isMobile,
                },
            ]
        },
    },
}
</script>

<style module lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    padding-left: 0;

    > li {
        list-style: none;
        padding: 0 .6em;
    }
}
</style>
