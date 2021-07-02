import { MutationTree } from "vuex";
import { Store } from "./types";

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

    SET_CURRENCY_BASE: (
        state,
        base: string,
    ) => {
        state.currencyBase = base;
    },
}

export default mutations;
