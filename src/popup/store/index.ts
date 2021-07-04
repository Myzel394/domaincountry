import { createStore } from "vuex"
import { Store } from "./types";
import mutations from "./mutations";
import initialState from "./state";
import actions from "./actions";
import getters from "./getters";
import VuexPersistence from "vuex-persist";

const vuexLocal = new VuexPersistence({
    storage: window.localStorage,
})

export default createStore<Store>({
    state: initialState,
    mutations,
    actions,
    getters,
    plugins: [
        vuexLocal.plugin,
    ],
});
