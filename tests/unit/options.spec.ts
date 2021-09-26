import { loadOptions } from "@/utils/popup/options";
import variables from "@/assets/variables.scss";

const KEY = "options";

describe("loadOptions", () => {
    it("returns defaults when data is none", async () => {
        global.browser = {
            storage: {
                // @ts-ignore
                sync: {
                    get: async () => ({}),
                },
            },
        }

        const actual = await loadOptions();
        const expected = {
            allowBadge: false,
            badgeColor: variables.backgroundColor as string,
        }

        expect(actual).toStrictEqual(expected);
    });

    it("returns correct values when data is partly given", async () => {
        global.browser = {
            storage: {
                // @ts-ignore
                sync: {
                    get: async () => ({
                        [KEY]: {
                            allowBadge: true,
                        },
                    }),
                },
            },
        }

        const actual = await loadOptions();
        const expected = {
            allowBadge: true,
            badgeColor: variables.backgroundColor as string,
        }

        expect(actual).toStrictEqual(expected);
    });

    it("returns defaults when data is partly wrong", async () => {
        global.browser = {
            storage: {
                // @ts-ignore
                sync: {
                    get: jest.fn(async () => ({
                        [KEY]: {
                            badgeColor: "red",
                            allowBadge: false,
                        },
                    })),
                },
            },
        }

        const actual = await loadOptions();
        const expected = {
            // @todo: run Tests using `runInBand`
            allowBadge: true,
            badgeColor: variables.backgroundColor as string,
        }

        expect(actual).toStrictEqual(expected);
    });
})
