import * as yup from "yup";
import variables from "@/assets/variables.scss";

import StorageArea = browser.storage.StorageArea;

export interface Options {
    allowBadge: boolean;
    badgeColor: string;
}

const KEY = "options";

const SCHEMA = yup.object().shape({
    allowBadge: yup.boolean()
        .required(),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .required(),
})

const SCHEMA_WITH_DEFAULT = yup.object().shape({
    allowBadge: yup.boolean()
        .default(false),
    badgeColor: yup.string()
        .matches(/^#([0-9a-f]{3}|[0-9a-f]{6})$/i)
        .default(variables.backgroundColor as string),
});

export const getStorage = (): StorageArea => {
    const storage = browser.storage && (browser.storage.sync || browser.storage.local);

    if (!storage) {
        throw new Error("Storage not available.");
    }

    return storage;
}

export const loadOptions = async (): Promise<Options> => {
    const storage = getStorage();

    const rawData = (await storage.get([KEY]))[KEY];
    return SCHEMA_WITH_DEFAULT.validate(rawData);
}

export const saveOptions = async (options: Options): Promise<void> => {
    const storage = getStorage();
    const validatedOptions = await SCHEMA.validate(options);

    return storage.set({
        [KEY]: validatedOptions,
    });
}
