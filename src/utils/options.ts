import * as yup from "yup";
import variables from "@/assets/variables.scss";

import getStorageMethod from "./getStorageMethod";

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

const SCHEMA_WITH_DEFAULT = yup.object().shape({
    allowBadge: yup.boolean()
        .default(DEFAULT_VALUE.allowBadge),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .default(DEFAULT_VALUE.badgeColor),
    fallbackQueryAPIUrl: yup.string()
        .url()
        .default(DEFAULT_VALUE.fallbackQueryAPIUrl),
});

export const loadOptions = async (): Promise<Options> => {
    const storage = getStorageMethod();

    const rawData = (await storage.get([KEY]))[KEY];
    try {
        const cleanedData = await SCHEMA_WITH_DEFAULT.validate(rawData);
        return Object.assign(DEFAULT_VALUE, cleanedData);
    } catch {
        return DEFAULT_VALUE;
    }
}

export const saveOptions = async (options: Options): Promise<void> => {
    const storage = getStorageMethod();
    const validatedOptions = await SCHEMA.validate(options);

    return storage.set({
        [KEY]: validatedOptions,
    });
}
