import { FetchDomainInformationResult } from "@/apis";
import Tab = browser.tabs.Tab;

interface BaseAPI<T> {
    isLoading: boolean;
    isError: boolean;
    data?: T;
}

type CurrentTab = {
    isLoading: false;
    isError: true;
    tab: undefined;
} | {
    isLoading: true,
    isError: boolean;
    tab: undefined;
} | {
    isLoading: false,
    isError: false,
    tab?: Tab;
}

export type DomainAPI = BaseAPI<FetchDomainInformationResult>

export interface Store {
    api: {
        domain: DomainAPI,
    },

    currentTab: CurrentTab;
}
