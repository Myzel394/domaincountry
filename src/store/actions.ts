import { ActionTree } from "vuex";
import subDays from "date-fns/subDays"
import { fetchDomainInformation, fetchExchangeHistory } from "@/apis";
import { api } from "@/constants";
import { Store } from "./types";
import { getCurrentTab } from "@/utils";

const actions: ActionTree<Store, Store> = {
    setCurrencyBase: (
        context,
        base: string,
    ) => {
        context.commit("SET_CURRENCY_BASE", base);
    },

    fetchDomainInformation: async (
        context,
        domain: string,
    ) => {
        context.commit("SET_API_IS_LOADING", {
            apiName: "domain",
            isLoading: true,
        });

        try {
            const data = await fetchDomainInformation(domain);

            context.commit("SET_API_DATA", {
                apiName: "domain",
                data,
            });
        } catch {
            context.commit("SET_API_IS_ERROR", {
                apiName: "domain",
                isError: true,
            });
        } finally {
            context.commit("SET_API_IS_LOADING", {
                apiName: "domain",
                isLoading: false,
            });
        }
    },

    fetchExchangeHistory: async (
        context,
        targetedCurrency: string,
    ) => {
        context.commit("SET_API_IS_LOADING", {
            apiName: "currency",
            isLoading: true,
        });

        try {
            const endDate = new Date();
            const startDate = subDays(endDate, api.EXCHANGE_HISTORY_AMOUNT);

            const data = await fetchExchangeHistory({
                base: context.state.currencyBase,
                targetedCurrency,
                startDate,
                endDate,
            });

            context.commit("SET_API_DATA", {
                apiName: "currency",
                data,
            });
        } catch {
            context.commit("SET_API_IS_ERROR", {
                apiName: "currency",
                isError: true,
            });
        } finally {
            context.commit("SET_API_IS_LOADING", {
                apiName: "currency",
                isLoading: false,
            });
        }
    },

    fetchDomain: async (
        context,
        domain: string,
    ) => {
        await context.dispatch("fetchDomainInformation", domain);

        const targetedCurrency = context.state.api.domain.data!.currency;

        if (!context.getters.isCurrencySame) {
            await context.dispatch("fetchExchangeHistory", targetedCurrency);
        }
    },

    getCurrentTab: async (
        context,
    ) => {
        context.commit("SET_CURRENT_TAB_LOADING", true);
        context.commit("SET_CURRENT_TAB_ERROR", false);

        try {
            const tab = await getCurrentTab();
            context.commit("SET_CURRENT_TAB", tab);
        } catch {
            context.commit("SET_CURRENT_TAB_ERROR", true);
        } finally {
            context.commit("SET_CURRENT_TAB_LOADING", false);
        }
    },
}

export default actions;
