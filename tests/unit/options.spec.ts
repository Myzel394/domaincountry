import { DEFAULT_VALUE, loadOptions } from "@/utils/options";

const KEY = "options";

describe("loadOptions", () => {
    it("returns defaults when data is none", async () => {
        // @ts-ignore
        global.extension = {
            storage: {
                // @ts-ignore
                sync: {
                    get: async () => ({}),
                },
            },
        }

        const actual = await loadOptions();

        expect(actual).toStrictEqual(DEFAULT_VALUE);
    });

    it("returns correct values when data is partly given", async () => {
        // @ts-ignore
        global.extension = {
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
            badgeColor: DEFAULT_VALUE.badgeColor,
            fallbackQueryAPIUrl: DEFAULT_VALUE.fallbackQueryAPIUrl,
        }

        expect(actual).toStrictEqual(expected);
    });

    it("returns defaults when data is partly wrong", async () => {
        // @ts-ignore
        global.extension = {
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

        expect(actual).toStrictEqual(DEFAULT_VALUE);
    });
})
