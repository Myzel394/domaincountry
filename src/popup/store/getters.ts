import { GetterTree } from "vuex";
import { Store } from "./types";
import { isLocalHostAddress, isOnionAddress } from "@/utils";
import { FetchDomainInformationResult } from "@/apis";

const getters: GetterTree<Store, Store> = {
    isLoading: (state) =>
        state.api.domain.isLoading ||
        state.currentTab.isLoading ||
        !state.api.domain.data,
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
    data: (state): FetchDomainInformationResult | null => {
        const data = state.api.domain.data;
        console.log(data, JSON.parse(JSON.stringify(state)));

        if (!data) {
            return null;
        }

        // @ts-ignore
        return data.isFromBackground ? data.data : data;
    },
    // @ts-ignore
    isDataFromBackground: state => state.api.domain.data?.isFromBackground,
}

export default getters;
