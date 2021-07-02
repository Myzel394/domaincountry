<template>
    <ul class="wrapper">
        <li
            class="element"
            v-for="({ title, value, icon }) of boxes"
            :key="title"
        >
            <BoxInformation
                :title="title"
                :value="value"
            >
                <template v-slot:icon>
                    <font-awesome-icon :icon="icon" />
                </template>
            </BoxInformation>
        </li>
    </ul>
</template>

<script>
import BoxInformation from "@/components/functional/BoxInformation";
export default {
    name: "InformationBoxes",
    components: { BoxInformation },
    computed: {
        boxes() {
            return [
                {
                    title: "IP address",
                    value: this.$store.state.api.domain.data.ipAddress,
                    icon: "globe",
                },
                {
                    title: "Organisation",
                    value: this.$store.state.api.domain.data.organisationName,
                    icon: "wifi",
                },
                {
                    title: "Internet Service Provider",
                    value: this.$store.state.api.domain.data.ispName,
                    icon: "broadcast-tower",
                },
                {
                    title: "Timezone",
                    value: this.$store.state.api.domain.data.timezone.name,
                    icon: "clock",
                },
                {
                    title: "Currency",
                    value: this.$store.state.api.domain.data.currency,
                    icon: "exchange-alt",
                },
            ]
        },
    },
}
</script>

<style scoped lang="scss">
.wrapper {
    padding-left: 0;
    margin: 4em 0 2em 0;

    .element {
        list-style: none;
        margin-bottom: .4em;
    }
}
</style>
