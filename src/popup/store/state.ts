import { BaseAPI, Store } from "./types";


export const INITIAL_API_STATE: BaseAPI<any> = {
    isLoading: false,
    isError: false,
    data: undefined,
}

const cloneObject = (obj: any) => JSON.parse(JSON.stringify(obj));

const initialState: Store = {
    api: {
        domain: cloneObject(INITIAL_API_STATE),
    },
    currentTab: {
        isLoading: false,
        isError: false,
        tab: undefined,
    },
}

export default initialState;

