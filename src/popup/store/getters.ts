import { GetterTree } from "vuex";
import { Store } from "./types";
import { isLocalHostAddress, isOnionAddress, getUrl } from "@/utils";
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
        const url = getUrl(state.currentTab.tab?.url)

        if (!url) {
            return false;
        }

        return isLocalHostAddress(url);
    },
    isOnionAddress: state => {
        const url = getUrl(state.currentTab.tab?.url)

        if (!url) {
            return false;
        }

        return isOnionAddress(url);
    },
    data: (state): FetchDomainInformationResult | null => {
        const data = state.api.domain.data;

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
