import axios, { AxiosInstance, AxiosAdapter } from "axios";
import { throttleAdapterEnhancer } from "axios-extensions";
import * as inMilliseconds from "in-milliseconds";

const TIMEOUT = 5000;

const createInstance = (): AxiosInstance => {
    const instance = axios.create({
        adapter: throttleAdapterEnhancer(axios.defaults.adapter as AxiosAdapter, {
            threshold: inMilliseconds.hours(5),
        }),
        timeout: TIMEOUT,
    });

    return instance;
}

const instance = createInstance()

export default instance;
