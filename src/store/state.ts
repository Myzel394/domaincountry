import { BaseAPI } from "./types";


export const INITIAL_API_STATE: BaseAPI<any> = {
    isLoading: false,
    isError: false,
    data: undefined,
}

const cloneObject = (obj: any) => JSON.parse(JSON.stringify(obj));

const initialState = {
    api: {
        domain: cloneObject(INITIAL_API_STATE),
        currency: cloneObject(INITIAL_API_STATE),
    },
    currencyBase: "EUR",
}

export default initialState;

