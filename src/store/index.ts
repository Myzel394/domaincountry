import { createStore } from "vuex"
import { Store } from "./types";
import mutations from "./mutations";
import initialState from "./state";
import actions from "./actions";
import getters from "./getters";


export default createStore<Store>({
    state: initialState,
    mutations,
    actions,
    getters,
});
