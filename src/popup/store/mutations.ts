import { MutationTree } from "vuex";
import { Store } from "./types";
import Tab = browser.tabs.Tab;

const mutations: MutationTree<Store> = {
    SET_API_IS_LOADING: (
        state,
        {
            apiName,
            isLoading,
        }: {
            apiName: keyof Store["api"];
            isLoading: boolean;
        },
    ) => {
        state.api[apiName].isLoading = isLoading;
    },
    SET_API_IS_ERROR: (
        state,
        {
            apiName,
            isError,
        }: {
            apiName: keyof Store["api"];
            isError: boolean;
        },
    ) => {
        state.api[apiName].isError = isError;
    },
    SET_API_DATA: (
        state,
        {
            apiName,
            data,
        }: {
            apiName: keyof Store["api"];
            data: Store["api"][keyof Store["api"]];
        },
    ) => {
        // @ts-ignore
        state.api[apiName].data = data;
    },

    SET_CURRENT_TAB_LOADING: (
        state,
        isLoading: boolean,
    ) => {
        state.currentTab.isLoading = isLoading;
    },

    SET_CURRENT_TAB_ERROR: (
        state,
        isError: boolean,
    ) => {
        state.currentTab.isError = isError;
    },

    SET_CURRENT_TAB: (
        state,
        tab: Tab,
    ) => {
        state.currentTab.tab = tab;
    },

    SET_IS_THROTTLED: (
        state,
        isThrottled: boolean,
    ) => {
        state.api.domain.isThrottled = isThrottled;
    },
}

export default mutations;
