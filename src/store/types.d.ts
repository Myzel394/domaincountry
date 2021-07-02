import { FetchDomainInformationResult } from "@/apis";

interface BaseAPI<T> {
    isLoading: boolean;
    isError: boolean;
    data?: T;
}

export type DomainAPI = BaseAPI<FetchDomainInformationResult>

export type CurrencyAPI = BaseAPI<{
    rates: Record<string, number>;
}>

export interface Store {
    api: {
        domain: DomainAPI,
        currency: CurrencyAPI;
    },

    currencyBase: string;
}
