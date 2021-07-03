import { GetterTree } from "vuex";
import { Store } from "./types";
import { isLocalHostAddress, isOnionAddress } from "@/utils";

const getters: GetterTree<Store, Store> = {
    isCurrencySame: state =>
        state.currencyBase === state.api.domain.data?.currency,
    isReady: (state, getters) =>
        state.api.domain.data &&
        !state.currentTab.isLoading &&
        (state.api.currency.data || getters.isCurrencySame),
    isError: state =>
        state.api.domain.isError ||
        state.api.currency.isError ||
        state.currentTab.isError,
    isLocalHost: state => {
        if (!state.currentTab.tab?.url) {
            return false;
        }

        return isLocalHostAddress(state.currentTab.tab.url);
    },
    isOnionAddress: state => {
        if (!state.currentTab.tab?.url) {
            return false;
        }

        return isOnionAddress(state.currentTab.tab.url);
    },
}

export default getters;
