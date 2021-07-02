<template>
    <ul :class="$style.chart">
        <li
            v-for="({date, rate}) of series"
            :key="rate"
        >
            <CurrencyIndicator
                :value="rate"
                :date="date"
            />
        </li>
    </ul>
</template>

<script>
import parseISO from "date-fns/parseISO";
import CurrencyIndicator from "@/components/functional/CurrencyIndicator.vue";

export default {
    name: "CurrencyChart",
    components: { CurrencyIndicator },
    computed: {
        series() {
            const rates = Object.entries(this.$store.state.api.currency.data.rates);
            const series = [];

            for (let i = 1; i < rates.length; i++) {
                const date = parseISO(rates[i][0]);
                const rate = rates[i][1] / rates[i - 1][1];
                series.push({
                    date,
                    rate,
                });
            }

            return series;
        },
    },
}
</script>

<style module lang="scss">
.chart {
    padding-left: 0;
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    flex-wrap: wrap;
    align-items: center;

    > li {
        list-style: none;
        margin-right: .4em;
        margin-bottom: .4em;
    }
}
</style>
