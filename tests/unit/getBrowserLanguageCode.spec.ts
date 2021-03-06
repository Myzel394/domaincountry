import { getBrowserLanguageCode } from "@/utils";

describe("getBrowserLanguageCode", () => {
    it("returns correct code", () => {
        const mockedGetUILanguage = jest.fn(() => "en-US");
        // @ts-ignore
        global.extension = {
            // @ts-ignore
            i18n: {
                getUILanguage: mockedGetUILanguage,
            },
        }

        const actual = getBrowserLanguageCode();
        const expected = "en";

        expect(actual).toBe(expected);
    })
});
