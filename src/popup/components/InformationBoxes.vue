<template>
    <ul :class="$style.list">
        <li
            v-for="({ title, value, icon, link }) of boxes"
            :key="title"
        >
            <BoxInformation
                :title="title"
                :value="value"
                :link="link"
            >
                <template v-slot:icon>
                    <font-awesome-icon :icon="icon" />
                </template>
            </BoxInformation>
        </li>
    </ul>
</template>

<script>
import BoxInformation from "@/popup/components/functional/BoxInformation";
import { getCanonicalName } from "../../utils/popup";

export default {
    name: "InformationBoxes",
    components: { BoxInformation },
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
        domain() {
            const url = this.$store.state.currentTab.tab.url;

            return (new URL(url)).hostname;
        },
        boxes() {
            return [
                {
                    title: this.$translate("popup_information_ipAddress"),
                    value: this.$store.getters.data.ipAddress,
                    icon: "globe",
                    link: `http://${this.$store.getters.data.ipAddress}`,
                },
                {
                    title: this.$translate("popup_information_organisation"),
                    value: this.$store.getters.data.organisationName,
                    icon: "wifi",
                },
                {
                    title: this.$translate("popup_information_isp"),
                    value: this.$store.getters.data.ispName,
                    icon: "broadcast-tower",
                },
                {
                    title: this.$translate("popup_information_timezone"),
                    value: this.$store.getters.data.timezone.name,
                    icon: "clock",
                },
                {
                    title: this.$translate("popup_information_currency"),
                    value: this.$store.getters.data.currency,
                    icon: "exchange-alt",
                },
                {
                    title: this.$translate("popup_information_canonicalName"),
                    value: (() => {
                        if (this.canonicalName.isLoading) {
                            return this.$translate("loadingText");
                        }
                        if (this.canonicalName.errorMessage) {
                            return this.canonicalName.errorMessage;
                        }

                        return this.canonicalName.value;
                    })(),
                    icon: "meteor",
                    link: this.canonicalName.value ? `https://${this.canonicalName.value}` : "",
                },
            ]
        },
    },
    mounted() {
        this.loadCanonicalName();
    },
    methods: {
        async loadCanonicalName() {
            this.canonicalName.errorMessage = null;
            this.canonicalName.isLoading = true;

            if (!browser) {
                this.canonicalName.errorMessage = this.$translate("only_supported_by_firefox");
                this.canonicalName.isLoading = false;
                return;
            }
            if (!browser.dns) {
                this.canonicalName.errorMessage = this.$translate("popup_information_canonicalName_not_granted");
                this.canonicalName.isLoading = false;
                return;
            }

            try {
                this.canonicalName.value = await getCanonicalName(this.domain);
            } catch (error) {
                this.canonicalName.errorMessage = this.$translate("errorText");
            } finally {
                this.canonicalName.isLoading = false;
            }
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
