import axios,  { AxiosInstance } from "axios";
import { throttleAdapterEnhancer } from "axios-extensions";
import * as inMilliseconds from "in-milliseconds";

const createInstance = (): AxiosInstance => {
    const instance = axios.create({
        // @ts-ignore
        adapter: throttleAdapterEnhancer(axios.defaults.adapter, {
            threshold: inMilliseconds.hours(5),
        }),
    });

    return instance;
}

const instance = createInstance()

export default instance;
