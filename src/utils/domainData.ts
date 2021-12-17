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
    let savedData = null;

    try {
        // Tries to load data from cache - otherwise fetches new data and saves it.
        savedData = (await loadData())[domain];
        // eslint-disable-next-line no-empty
    } catch (error) {}

    if (!forceNewFetch && savedData) {
        return savedData;
    }

    // Fetch new data
    const newData = await fetchDomainInformation(domain);

    try {
        // Save it
        await saveData(domain, newData);
    } catch (error) {
        // Save quota exceeded, we won't save the data
    }

    return newData;
}

export const clearData = async (): Promise<void> => {
    const storage = getStorageMethod();

    await storage.set({
        [KEY]: DEFAULT_VALUE,
    });
}
