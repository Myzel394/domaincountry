import { AxiosError } from "axios";
import { ActionTree } from "vuex";
import { Store } from "./types";
import { getCurrentTab, domainData, getDomain } from "@/utils";

const RETRY_WAIT_AMOUNT = 150;

const actions: ActionTree<Store, Store> = {
    fetchDomainInformation: async (
        context,
        domain: string,
    ) => {
        await context.commit("SET_API_IS_LOADING", {
            apiName: "domain",
            isLoading: true,
        });

        try {
            const data = await domainData.fetchData(domain);

            await context.commit("SET_API_DATA", {
                apiName: "domain",
                data,
            });
            await context.commit("SET_API_IS_ERROR", {
                apiName: "domain",
                isError: false,
            });
        } catch (_error) {
            const error = _error as AxiosError;

            await context.commit("SET_API_IS_ERROR", {
                apiName: "domain",
                isError: true,
            });

            if (error.isAxiosError && error.response?.status === 429) {
                await context.dispatch("setIsThrottled", true);
            }
        } finally {
            await context.commit("SET_API_IS_LOADING", {
                apiName: "domain",
                isLoading: false,
            });
        }
    },

    getCurrentTab: async (
        context,
    ) => {
        await context.commit("SET_CURRENT_TAB_LOADING", true);
        await context.commit("SET_CURRENT_TAB_ERROR", false);

        try {
            const tab = await getCurrentTab();
            await context.commit("SET_CURRENT_TAB", tab);
        } catch (error) {
            await context.commit("SET_CURRENT_TAB_ERROR", true);
        } finally {
            await context.commit("SET_CURRENT_TAB_LOADING", false);
        }
    },

    setIsThrottled: async (
        context,
        isThrottled: boolean,
    ) => {
        await context.commit("SET_IS_THROTTLED", isThrottled)
    },

    retryFetch: async (
        context,
    ) => {
        await context.dispatch("setIsThrottled", false);
        await context.dispatch("getCurrentTab");
        await context.commit("SET_API_IS_LOADING", {
            apiName: "domain",
            isLoading: true,
        });

        // Wait a little bit to show the user that we are in fact trying to refetch the data
        setTimeout(() => {
            const domain = getDomain(context.state.currentTab.tab!.url as string);

            context.dispatch("fetchDomainInformation", domain)
        }, RETRY_WAIT_AMOUNT);
    },

    fetchInitialData: async (
        context,
    ) => {
        await context.dispatch("setIsThrottled", false);
        await context.dispatch("getCurrentTab");

        const domain = getDomain(context.state.currentTab.tab!.url as string);

        await context.dispatch("fetchDomainInformation", domain)
    },
}

export default actions;
