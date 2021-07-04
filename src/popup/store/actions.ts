import { ActionTree } from "vuex";
import { fetchDomainInformation } from "@/apis";
import { Store } from "./types";
import { getCurrentTab } from "@/utils";

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
            const data = await fetchDomainInformation(domain);

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
            context.commit("SET_CURRENT_TAB_ERROR", false);
        } catch (error) {
            context.commit("SET_CURRENT_TAB_ERROR", true);
        } finally {
            context.commit("SET_CURRENT_TAB_LOADING", false);
        }
    },

    fetchInitialData: async (
        context,
    ) => {
        await context.dispatch("getCurrentTab");

        const domain = (new URL(context.state.currentTab.tab!.url as string)).host;

        await context.dispatch("fetchDomainInformation", domain)
    },
}

export default actions;
