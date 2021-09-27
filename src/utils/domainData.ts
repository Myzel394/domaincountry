import getStorageMethod from "./getStorageMethod";
import { fetchDomainInformation } from "@/apis";

const KEY = "domain-data";
const DEFAULT_VALUE = {};

export const loadData = async (): Promise<Record<string, any>> => {
    const storage = getStorageMethod();
    const data = (await storage.get([KEY]))[KEY];

    return (data || DEFAULT_VALUE) as Record<string, any>;
};

export const saveData = async (domain: string, data: any): Promise<void> => {
    const storage = getStorageMethod();
    const currentData = await loadData();

    return storage.set({
        [KEY]: {
            ...currentData,
            [domain]: {
                isFromBackground: true,
                date: new Date(),
                data,
            },
        },
    });
}

export const fetchData = async (domain: string, forceNewFetch = false): Promise<any> => {
    // Tries to load data from cache - otherwise fetches new data and saves it.
    const savedData = (await loadData())[domain];

    if (!forceNewFetch && savedData) {
        return savedData;
    }

    // Fetch new data
    const newData = await fetchDomainInformation(domain);

    // Save it
    await saveData(domain, newData);

    return newData;
}

export const clearData = async (): Promise<void> => {
    const storage = getStorageMethod();

    await storage.set({
        [KEY]: DEFAULT_VALUE,
    });
}
