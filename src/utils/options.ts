import * as yup from "yup";
import variables from "@/assets/variables.scss";

import getStorageMethod from "./getStorageMethod";
import StorageValue = browser.storage.StorageValue;

export interface Options {
    allowBadge: boolean;
    badgeColor: string;
    prefetchTabs: boolean;
    queryAPIURL: string;
    allowSearchBarIcon: boolean;
}

const KEY = "options";

export const DEFAULT_VALUE: Options = {
    allowBadge: false,
    badgeColor: variables.backgroundColor,
    prefetchTabs: true,
    queryAPIURL: "https://domaincountry-query-api.tolledomain.com",
    allowSearchBarIcon: false,
}

const SCHEMA = yup.object().shape({
    allowBadge: yup.boolean(),
    allowSearchBarIcon: yup.boolean(),
    prefetchTabs: yup.boolean(),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .required(),
    queryAPIURL: yup.string()
        .url()
        .required(),
});

const SCHEMA_WITH_DEFAULT = yup.object().shape({
    allowBadge: yup.boolean()
        .default(DEFAULT_VALUE.allowBadge),
    prefetchTabs: yup.boolean().default(true),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .default(DEFAULT_VALUE.badgeColor),
    queryAPIURL: yup.string()
        .url()
        .default(DEFAULT_VALUE.queryAPIURL),
    allowSearchBarIcon: yup.boolean()
        .default(DEFAULT_VALUE.allowSearchBarIcon),
});

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
        const cleanedData = await SCHEMA_WITH_DEFAULT.validate(rawData);
        return Object.assign(DEFAULT_VALUE, cleanedData);
    } catch {
        return DEFAULT_VALUE;
    }
}

export const saveOptions = async (options: Options): Promise<void> => {
    const validatedOptions = await SCHEMA.validate(options);
    await saveData(KEY, validatedOptions);
}
