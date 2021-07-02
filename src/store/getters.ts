import { GetterTree } from "vuex";
import { Store } from "./types";

const getters: GetterTree<Store, Store> = {
    isCurrencySame: state => state.currencyBase === state.api.domain.data?.currency,
}

export default getters;
