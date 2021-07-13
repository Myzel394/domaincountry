import { GetterTree } from "vuex";
import { Store } from "./types";
import { isLocalHostAddress, isOnionAddress } from "@/utils";

const getters: GetterTree<Store, Store> = {
    isLoading: (state) =>
        state.api.domain.isLoading ||
        state.currentTab.isLoading,
    isError: state =>
        state.api.domain.isError ||
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
