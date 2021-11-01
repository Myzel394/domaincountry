<template>
    <ul :class="$style.list">
        <li>
            <BoxInformation
                :title="ipAddressTitle"
                :value="$store.getters.data.ipAddresses[0]"
                icon="globe"
            >
                <template #content>
                    <ul :class="$style.ipAddresses">
                        <li
                            v-for="ipAddress of $store.getters.data.ipAddresses"
                            :key="ipAddress"
                        >
                            <Link :href="`http://${ipAddress}`">
                                {{ ipAddress }}
                            </Link>
                        </li>
                    </ul>
                </template>
            </BoxInformation>
        </li>
        <li
            v-for="({ title, value, icon, link }) of boxes"
            :key="title"
        >
            <BoxInformation
                :title="title"
                :value="value"
                :link="link"
                :icon="icon"
            />
        </li>
    </ul>
</template>

<script>
import BoxInformation from "./functional/BoxInformation";
import Link from "./functional/Link";
import { getDomain } from "@/utils";

export default {
    name: "InformationBoxes",
    components: { Link, BoxInformation },
    data() {
        return {
            canonicalName: {
                isLoading: true,
                errorMessage: null,
                value: undefined,
            },
        }
    },
    computed: {
        ipAddressTitle() {
            if (this.$store.getters.data.ipAddresses.length === 1) {
                return this.$translate("pages@popup@information@ip_address@label")
            } else {
                return this.$translate("pages@popup@information@ip_address@label@plural")
            }
        },
        domain() {
            const url = this.$store.state.currentTab.tab.url;

            return getDomain(url);
        },
        boxes() {
            return [
                {
                    title: this.$translate("pages@popup@information@organisation@label"),
                    value: this.$store.getters.data.organisationName,
                    icon: "wifi",
                },
                {
                    title: this.$translate("pages@popup@information@isp@label"),
                    value: this.$store.getters.data.ispName,
                    icon: "broadcast-tower",
                },
                {
                    title: this.$translate("pages@popup@information@timezone@label"),
                    value: this.$store.getters.data.timezone.name,
                    icon: "clock",
                },
                {
                    title: this.$translate("pages@popup@information@currency@label"),
                    value: this.$store.getters.data.currency,
                    icon: "exchange-alt",
                },
                {
                    title: this.$translate("pages@popup@information@canonical_name@label"),
                    value: this.$store.getters.data.canonicalName,
                    icon: "meteor",
                    link: `https://${this.$store.getters.data.canonicalName}`,
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

.ipAddresses {
    padding-left: 0;

    li {
        list-style: none;
        padding: .2em 0;
    }
}

@media (prefers-reduced-motion: reduce) {
    .list > li {
        animation: none;
    }
}
</style>
