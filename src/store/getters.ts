import { GetterTree } from "vuex";
import { Store } from "./types";

const getters: GetterTree<Store, Store> = {
    isCurrencySame: state => state.currencyBase === state.api.domain.data?.currency,
    isReady: (state, getters) => Boolean(state.api.domain.data && (state.api.currency.data || getters.isCurrencySame)),
    isError: state => state.api.domain.isError || state.api.currency.isError,
}

export default getters;
