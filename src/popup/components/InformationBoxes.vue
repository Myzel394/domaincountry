<template>
    <ul :class="$style.list">
        <li
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
        <li v-if="!$store.getters.isCurrencySame">
            <BoxInformation
                title="Currency"
                :value="$store.state.api.domain.data.currency"
            >
                <template v-slot:icon>
                    <font-awesome-icon icon="exchange-alt" />
                </template>
                <template v-slot:extra>
                    <CurrencyChart />
                </template>
            </BoxInformation>
        </li>
    </ul>
</template>

<script>
import BoxInformation from "@/popup/components/functional/BoxInformation";
import CurrencyChart from "@/popup/components/CurrencyChart";

export default {
    name: "InformationBoxes",
    components: { CurrencyChart, BoxInformation },
    data() {
        return {
            names: [ "MS", "Apple", "Google" ],
            values: [
                [ 10, 5, 5, 5 ],
                [ 40, 10, 10, 10 ],
                [ 30, 30, 30, 30 ],
            ],
        }
    },
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
            ]
        },
    },
}
</script>

<style module lang="scss">
@keyframes boxIn {
    0% {
        transform: translateY(1em)
    }
    100% {
        transform: none;
    }
}

.list {
    padding-left: 0;
    margin: 4em 0 2em 0;

    > li {
        list-style: none;
        margin-bottom: .4em;

        transform: translateY(1em);

        animation: boxIn .2s ease-in forwards;
    }

    > li:nth-of-type(2) {
        animation-delay: .1s;
    }

    > li:nth-of-type(3) {
        animation-delay: .2s;
    }

    > li:nth-of-type(4) {
        animation-delay: .3s;
    }

    > li:nth-of-type(5) {
        animation-delay: .4s;
    }
}

@media (prefers-reduced-motion: reduce) {
    .list > li {
        animation: none;
    }
}

</style>
