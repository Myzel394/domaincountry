import { AxiosError } from "axios";
import { ActionTree } from "vuex";
import { Store } from "./types";
import { getCurrentTab, domainData, getDomain } from "@/utils";

const actions: ActionTree<Store, Store> = {
    fetchDomainInformation: async (
        context,
        domain: string,
    ) => {
        context.commit("SET_API_IS_LOADING", {
            apiName: "domain",
            isLoading: true,
        });

        try {
            const data = await domainData.fetchData(domain);

            context.commit("SET_API_DATA", {
                apiName: "domain",
                data,
            });
            context.commit("SET_API_IS_ERROR", {
                apiName: "domain",
                isError: false,
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

    getCurrentTab: async (
        context,
    ) => {
        context.commit("SET_CURRENT_TAB_LOADING", true);
        context.commit("SET_CURRENT_TAB_ERROR", false);

        try {
            const tab = await getCurrentTab();
            context.commit("SET_CURRENT_TAB", tab);
        } catch (error) {
            alert(error);
            context.commit("SET_CURRENT_TAB_ERROR", true);
        } finally {
            context.commit("SET_CURRENT_TAB_LOADING", false);
        }
    },

    setIsThrottled: (
        context,
        isThrottled: boolean,
    ) => {
        context.commit("SET_IS_THROTTLED", isThrottled)
    },

    fetchInitialData: async (
        context,
    ) => {
        await context.dispatch("setIsThrottled", false);
        await context.dispatch("getCurrentTab");

        const domain = getDomain(context.state.currentTab.tab!.url as string);

        try {
            await context.dispatch("fetchDomainInformation", domain)
        } catch (_error) {
            const error = _error as AxiosError;

            console.log("#ärrror", error);

            if (error.response?.status === 429) {
                await context.dispatch("setIsThrottled", true);
            }
        }
    },
}

export default actions;
