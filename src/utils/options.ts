import * as yup from "yup";
import variables from "@/assets/variables.scss";

import getStorageMethod from "./getStorageMethod";
import StorageValue = browser.storage.StorageValue;

export interface Options {
    allowBadge: boolean;
    badgeColor: string;
    fallbackQueryAPIUrl: string;
}

const KEY = "options";

export const DEFAULT_VALUE: Options = {
    allowBadge: false,
    badgeColor: variables.backgroundColor,
    fallbackQueryAPIUrl: "https://domaincountry-query-api.tolledomain.com",
}

const SCHEMA = yup.object().shape({
    allowBadge: yup.boolean()
        .required(),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .required(),
    fallbackQueryAPIUrl: yup.string()
        .url()
        .required(),
})

const getRawData = async (key: string) => {
    const storage = getStorageMethod();

    return (await storage.get([key]))[key];
}

const saveData = async (key: string, data: StorageValue) => {
    const storage = getStorageMethod();

    return await storage.set({
        [key]: data,
    });
}

export const loadOptions = async (): Promise<Options> => {
    const rawData = await getRawData(KEY);

    try {
        const cleanedData = await SCHEMA.validate(rawData);
        return Object.assign(DEFAULT_VALUE, cleanedData);
    } catch {
        return DEFAULT_VALUE;
    }
}

export const saveOptions = async (options: Options): Promise<void> => {
    const validatedOptions = await SCHEMA.validate(options);

    await saveData(KEY, validatedOptions);
}
