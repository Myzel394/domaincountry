import { GetterTree } from "vuex";
// @ts-ignore
import tldExtract from "tld-extract";
import { Store } from "./types";

const getters: GetterTree<Store, Store> = {
    isCurrencySame: state => state.currencyBase === state.api.domain.data?.currency,
    isReady: (state, getters) => Boolean(state.api.domain.data && (state.api.currency.data || getters.isCurrencySame)),
    isError: state => state.api.domain.isError || state.api.currency.isError,
    isLocalHost: state => {
        console.log(state.currentTab.tab);

        if (!state.currentTab.tab?.url) {
            return false;
        }

        const host = (new URL(state.currentTab.tab.url)).host;

        return !host.includes(".");
    },
    isOnionAddress: state => {
        if (!state.currentTab.tab?.url) {
            return false;
        }

        const { tld } = tldExtract(state.currentTab.tab.url, {
            allowUnknownTLD : true,
        });

        return tld === "onion";
    },
}

export default getters;
