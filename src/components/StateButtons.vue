<template>
    <ul class="wrapper">
        <li
            v-for="({name, active}) of buttons"
            :key="name"
            class="inner"
        >
            <ButtonState
                :name="name"
                :active="active"
            />
        </li>
    </ul>
</template>

<script>
import ButtonState from "@/components/functional/ButtonState";

export default {
    name: "Buttons",
    components: { ButtonState },
    computed: {
        buttons() {
            return [
                {
                    name: "Proxy",
                    active: this.$store.state.api.domain.data.isProxy,
                },
                {
                    name: "Hosting",
                    active: this.$store.state.api.domain.data.isHosting,
                },
                {
                    name: "Mobile",
                    active: this.$store.state.api.domain.data.isMobile,
                },
            ]
        },
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    display: flex;
    align-items: center;
    padding-left: 0;

    .inner {
        list-style: none;
        padding: 0 .6em;
    }
}
</style>
